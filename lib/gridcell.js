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
    }

    onKeyUp(event) {
        shiftKey = event.shiftKey
    }

    onArrowKeyDown(event) {
        event.preventDefault()
        const sibling = {
            ArrowLeft : this.prev,
            ArrowRight : this.next,
            ArrowUp : this.topSibling,
            ArrowDown : this.bottomSibling
        }[event.key]
        if(sibling) sibling.focus()
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
        const sibling = this.node.previousSibling
        return sibling && sibling.assembler
    }

    get next() {
        const sibling = this.node.nextSibling
        return sibling && sibling.assembler
    }

    get topSibling() {
        const prevRow = this.row.prev
        return prevRow && prevRow.cells[this.index] || null
    }

    get bottomSibling() {
        const nextRow = this.row.next
        return nextRow && nextRow.cells[this.index] || null
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Widget.prototype, 'tabIndex')
Object.defineProperty(GridCell.prototype, 'tabIndex', descriptor)

export function gridcell(init) {
    return new GridCell('td', init)
}
