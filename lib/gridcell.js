import { Cell } from './cell'
import { Widget } from './widget'
import { NodeInit } from 'htmlmodule'

export class GridCell extends Cell {

    constructor(object, init) {
        super(object, {
            role : 'gridcell',
            className : 'gridcell',
            tabIndex : -1
        })
        if(init) this.init(NodeInit(init))
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
}

const descriptor = Object.getOwnPropertyDescriptor(Widget.prototype, 'tabIndex')
Object.defineProperty(GridCell.prototype, 'tabIndex', descriptor)

export function gridcell(init) {
    return new GridCell('td', init)
}
