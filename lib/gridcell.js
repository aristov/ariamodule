import { Cell } from './cell'
import { Widget } from './widget'
import { NodeInit } from 'htmlmodule'

let shiftKey = false

export class GridCell extends Cell {

    constructor(object, init) {
        super(object, {
            role : 'gridcell',
            className : 'gridcell',
            tabIndex : -1,
        })
        this.init({
            onfocus : this.onFocus.bind(this),
            onkeydown : this.onKeyDown.bind(this),
            onkeyup : this.onKeyUp.bind(this),
        })
        if(init) this.init(init)
        shiftKey = false
    }

    onFocus() {
        if(this.selected) this.selected = 'true'
    }

    onKeyDown(event) {
        shiftKey = event.shiftKey
        if(event.key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        if(event.key === 'Enter') {
            this.onEnterKeyDown(event)
        }
    }

    onKeyUp(event) {
        shiftKey = event.shiftKey
    }

    onArrowKeyDown(event) {
        event.preventDefault()
        const siblings = {
            ArrowLeft : () => this.prev,
            ArrowRight : () => this.next,
            ArrowUp : () => this.topSibling,
            ArrowDown : () => this.bottomSibling
        }
        const sibling = siblings[event.key]()
        if(sibling) sibling.focus()
    }

    onEnterKeyDown(event) {
        if(this.selected === 'true') {
            if(this.colSpan > 1) this.colSpan = 1
            else {
                const filter = ({ selected }) => selected === 'true'
                const cells = this.row.cells.filter(filter)
                const first = cells[0]
                const last = cells[cells.length - 1]
                if(first.row.index === last.row.index) {
                    if(first.index < last.index) {
                        first.colSpan = last.index - first.index + 1
                        first.focus()
                    }
                }
            }
            if(this.rowSpan > 1) this.rowSpan = 1
            else {
                const filter = ({ selected }) => selected === 'true'
                const cells = this.column.filter(filter)
                const first = cells[0]
                const last = cells[cells.length - 1]
                if(first.index === last.index) {
                    if(first.row.index < last.row.index) {
                        first.rowSpan = last.row.index - first.row.index + 1
                        first.focus()
                    }
                }
            }
        }
    }

    focus() {
        this.node.focus()
    }

    set readOnly(readOnly) {
        this.node.setAttribute('aria-readonly', readOnly)
    }

    get readOnly() {
        return this.node.getAttribute('aria-readonly')
    }

    set required(required) {
        this.node.setAttribute('aria-required', required)
    }

    get required() {
        return this.node.getAttribute('aria-required')
    }

    set selected(selected) {
        if(selected === 'true') {
            if(shiftKey) {
                if(this.row.multiselectable) {
                    this.grid.rows.forEach(r => {
                        if(r !== this.row) r.selected = 'false'
                    })
                } else if(this.grid.multiselectable) {
                    this.grid.cells.forEach(c => {
                        if(c.index !== this.index) c.selected = 'false'
                    })
                }
            }
            else this.grid.selected = 'false'
        }
        this.node.setAttribute('aria-selected', selected)
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    get grid() {
        return this.node.closest('table').assembler
    }

    get row() {
        return this.node.parentNode.assembler
    }

    get index() {
        return this.node.cellIndex
    }

    get prev() {
        let sibling = this.node
        do sibling = sibling.previousSibling
        while(sibling && sibling.hidden)
        return sibling && sibling.assembler
    }

    get next() {
        let sibling = this.node
        do sibling = sibling.nextSibling
        while(sibling && sibling.hidden)
        return sibling && sibling.assembler
    }

    get column() {
        return this.grid.rows.map(r => r.cells[this.index])
    }

    get topSibling() {
        /*const column = this.column
        let row = this.row
        let cell
        do {
            row = row.prev
            cell = row && column[row.index]
        }
        while(cell && cell.hidden)
        return cell && row.assembler*/

        const sibling = this.column[this.row.index - 1]
        return sibling && sibling.hidden? sibling.prev : sibling
    }

    get bottomSibling() {
        const sibling = this.column[this.row.index + 1]
        return sibling && sibling.hidden? sibling.prev : sibling
    }

    set colSpan(colSpan) {
        const start = this.index
        const cells = this.row.cells
        const owns = []
        for(let i = start + 1; i < start + this.colSpan; i++) {
            cells[i].hidden = false
        }
        for(let i = start + 1; i < start + colSpan; i++) {
            const cell = cells[i]
            cell.hidden = true
            owns.push(cell)
        }
        this.node.colSpan = colSpan
        this.owns = owns
    }

    get rowSpan() {
        return this.node.rowSpan
    }

    set rowSpan(rowSpan) {
        const start = this.row.index
        const cells = this.column
        const owns = []
        for(let i = start + 1; i < start + this.rowSpan; i++) {
            cells[i].hidden = false
        }
        for(let i = start + 1; i < start + rowSpan; i++) {
            const cell = cells[i]
            cell.hidden = true
            owns.push(cell)
        }
        this.node.rowSpan = rowSpan
        this.owns = owns
    }

    get colSpan() {
        return this.node.colSpan
    }

    set hidden(hidden) {
        this.node.hidden = hidden
    }

    get hidden() {
        return this.node.hidden
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Widget.prototype, 'tabIndex')
Object.defineProperty(GridCell.prototype, 'tabIndex', descriptor)

export function gridcell(init) {
    return new GridCell('td', init)
}
