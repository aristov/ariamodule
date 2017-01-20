import { Group } from './group'
import { Widget } from './widget'

const { map } = Array.prototype

export class Row extends Group {
    constructor(object, init) {
        super(object, {
            role : 'row',
            className : 'row'
        })
        if(init) this.init(init)
    }

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

    get cells() {
        return map.call(this.node.cells, ({ assembler }) => assembler)
    }
}

// Object.assign(Row.prototype, Widget.prototype)

export function row(init) {
    return new Row('tr', init)
}
