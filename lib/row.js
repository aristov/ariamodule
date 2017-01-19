import { Group } from './group'
import { Widget } from './widget'

export class Row extends Group {

    set level(level) {
        this.node.setAttribute('aria-level', level)
    }

    get level() {
        return this.node.getAttribute('aria-level')
    }

    set selected(selected) {
        this.node.setAttribute('aria-selected', selected)
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    set colIndex(colIndex) {
        this.node.setAttribute('aria-colIndex', colIndex)
    }

    get colIndex() {
        return this.node.getAttribute('aria-colIndex')
    }

    set rowIndex(rowIndex) {
        this.node.setAttribute('aria-rowIndex', rowIndex)
    }

    get rowIndex() {
        return this.node.getAttribute('aria-rowIndex')
    }
}

// Object.assign(Row.prototype, Widget.prototype)
