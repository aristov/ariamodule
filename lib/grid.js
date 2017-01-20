import { Composite } from './composite'
import { Table } from './table'
import { NodeInit } from 'htmlmodule'

const { map } = Array.prototype

export class Grid extends Table {

    constructor(object, init) {
        super(object, {
            role : 'grid',
            className : 'grid',
        })
        if(init) this.init(init)
        this.cells[0].tabIndex = 0
    }


    get rows() {
        return map.call(this.node.rows, ({ assembler }) => assembler)
    }

    set level(level) {
        this.node.setAttribute('aria-level', level)
    }

    get level() {
        return this.node.getAttribute('aria-level')
    }

    set selected(selected) {
        this.cells.forEach(cell => cell.selected = selected)
    }

    get cells() {
        const collection = this.node.querySelectorAll('td[role=gridcell]')
        return map.call(collection, cell => cell.assembler)
    }

    /**
     *
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.node.setAttribute('aria-multiselectable', String(multiselectable))
    }

    /**
     *
     * @returns {boolean}
     */
    get multiselectable() {
        return this.node.getAttribute('aria-multiselectable') === 'true'
    }

    set readOnly(readOnly) {
        this.node.setAttribute('aria-readonly', readOnly)
    }

    get readOnly() {
        return this.node.getAttribute('aria-readonly')
    }
}

export function grid(init) {
    return new Grid('table', init)
}
