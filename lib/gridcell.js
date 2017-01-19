import { Cell } from './cell'
import { Widget } from './widget'

export class GridCell extends Cell {

    set readOnly(readOnly) {
        this.node.setAttribute('aria-readOnly', readOnly)
    }

    get readOnly() {
        return this.node.getAttribute('aria-readOnly')
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
