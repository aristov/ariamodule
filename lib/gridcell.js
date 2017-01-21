import { Cell } from './cell'
import { Widget } from './widget'
import { NodeInit, span, input } from 'htmlmodule'

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
        if(this.selected) {
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
            this.selected = 'true'
        }
    }

    onKeyDown(event) {
        const key = event.key
        shiftKey = event.shiftKey
        if(key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        else if(key === 'Enter') {
            this.onEnterKeyDown(event)
        }
        else if(key === 'Escape') {
            this.onEscapeKeyDown(event)
        }
        else if(/^a$/i.test(key) && (event.metaKey || event.ctrlKey)) {
            this.onSelectAllKeyDown(event)
        }
        else if(/^[a-zA-Z0-9 ]$/.test(key)) {
            this.onCharacterKeyDown(event)
        }
        else if(key === 'Backspace') {
            this.onBackspaceKeyDown(event)
        }
    }

    onSelectAllKeyDown(event) {
        event.preventDefault()
        if(this.row.multiselectable) {
            this.row.selected = 'true'
        } else if(this.grid.multiselectable) {
            this.column.forEach(c => c.selected = 'true')
        }
    }

    onCharacterKeyDown(event) {
        this.editmode = true
    }

    onBackspaceKeyDown(event) {
        if(!this.editmode) {
            this.text.textContent = ''
        }
    }

    onKeyUp(event) {
        shiftKey = event.shiftKey
    }

    onArrowKeyDown(event) {
        if(event.target === this.node) {
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
    }

    onEnterKeyDown(event) {
        if(this.selected === 'true') {
            const filter = ({ selected }) => selected === 'true'
            const cells = this.grid.cells.filter(filter)
            const first = cells[0]
            if(cells.length > 1) {
                if(cells.some(({ owns }) => owns.length)) {
                    cells.forEach(cell => {
                        if(cell.owns.length) cell.owns = []
                        cell.selected = 'false'
                    })
                }
                else {
                    first.owns = cells.slice(1)
                    first.focus()
                }
            }
            else if(first.owns.length) first.owns = []
            else this.editmode = !this.editmode
        }
    }

    onEscapeKeyDown(event) {
        if(this.editmode) this.editmode = false
    }

    onInputBlur(event) {
        this.editmode = false
    }

    focus() {
        this.node.focus()
    }

    set editmode(editmode) {
        if(editmode !== this.editmode) {
            if(editmode) {
                this.text.hidden = true
                this.input.value = this.text.textContent
                this.input.hidden = false
                this.input.focus()
            } else {
                this.input.hidden = true
                this.text.textContent = this.input.value
                this.text.hidden = false
                this.focus()
            }
        }
    }

    get editmode() {
        return this.text.hidden
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
        const sibling = this.row.cells[this.index - 1]
        return sibling && sibling.span
    }

    get next() {
        const sibling = this.row.cells[this.index + this.colSpan]
        return sibling && sibling.span
    }

    get topSibling() {
        let sibling = this.column[this.row.index - 1]
        return sibling && sibling.span
    }

    get bottomSibling() {
        const sibling = this.column[this.row.index + this.rowSpan]
        return sibling && sibling.span
    }

    get column() {
        return this.grid.rows.map(r => r.cells[this.index])
    }

    get span() {
        if(this.hidden) {
            const selector = `td[aria-owns~=${ this.id }]`
            const node = this.grid.node.querySelector(selector)
            return node? node.assembler : this
        } else return this
    }

    set colSpan(colSpan) {
        this.node.colSpan = colSpan
    }

    get colSpan() {
        return this.node.colSpan
    }

    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan
    }

    get rowSpan() {
        return this.node.rowSpan
    }

    set owns(owns) {
        this.owns.forEach(cell => cell.hidden = false)
        this.colSpan = 1
        this.rowSpan = 1
        if(owns.length) {
            const last = owns[owns.length - 1]
            owns.forEach(cell => cell.hidden = true)
            this.colSpan = last.index - this.index + 1
            this.rowSpan = last.row.index - this.row.index + 1
        }
        super.owns = owns
    }

    get owns() {
        return super.owns
    }

    set input(input) {
        this.node.append(input)
    }

    get input() {
        let node = this.node.querySelector('input')
        if(!node) {
            this.input = node = input({
                value : this.node.textContent,
                onblur : this.onInputBlur.bind(this)
            })
        }
        return node
    }

    get text() {
        return this.node.querySelector('span.text')
    }

    set children(children) {
        super.children = span({ className : 'text', children })
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Widget.prototype, 'tabIndex')
Object.defineProperty(GridCell.prototype, 'tabIndex', descriptor)

export function gridcell(init) {
    return new GridCell('td', init)
}
