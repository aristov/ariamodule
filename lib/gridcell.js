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
        // console.log('fuckus')
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
        const { target, key } = event
        const arrowMap = {
            ArrowLeft : target.previousSibling,
            ArrowRight : target.nextSibling,
            ArrowUp : this.topSibling,
            ArrowDown : this.bottomSibling
        }
        const sibling = arrowMap[key]
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
        this.node.setAttribute('aria-selected', selected)
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    get row() {
        const parent = this.node.parentNode
        return parent && parent.assembler
    }

    get index() {
        return this.node.cellIndex
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
