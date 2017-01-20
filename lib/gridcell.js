import { Cell } from './cell'
import { Widget } from './widget'
import { NodeInit } from 'htmlmodule'

const modKeys = ['metaKey', 'altKey', 'shiftKey', 'ctrlKey']

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
        })
        if(init) this.init(init)
    }

    onFocus() {
        if(this.selected) this.selected = 'true'
    }

    onKeyDown(event) {
        if(modKeys.some(mod => event[mod])) {
            this.onModKeyDown(event)
        }
        if(event.key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
    }

    onArrowKeyDown(event) {
        const sibling = {
            ArrowLeft : this.prev,
            ArrowRight : this.next,
            ArrowUp : this.topSibling,
            ArrowDown : this.bottomSibling
        }[event.key]
        if(sibling) sibling.focus()
    }

    onModKeyDown() {}

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
        if(selected === 'true') this.grid.selected = 'false'
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
