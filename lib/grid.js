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

    /**
     *
     * @param {GridCell} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        if(activeDescendant) {
            this.node.setAttribute('aria-activedescendant', activeDescendant.id)
            const activeElement = document.activeElement
            const focused = activeElement && activeElement.assembler
            if(focused) {
                const row = focused.row
                if(row.multiselectable) {
                    const cells = row.cells
                    cells.forEach(cell => cell.selected = 'false')
                    const index1 = focused.index
                    const index2 = activeDescendant.index
                    const slice = cells.slice(Math.min(index1, index2), Math.max(index1, index2) + 1)
                    slice.forEach(cell => cell.selected = 'true')
                } else if(this.multiselectable) {
                    const column = focused.column
                    column.forEach(cell => cell.selected = 'false')
                    const index1 = focused.row.index
                    const index2 = activeDescendant.row.index
                    const slice = column.slice(Math.min(index1, index2), Math.max(index1, index2) + 1)
                    slice.forEach(cell => cell.selected = 'true')
                }
            }
        }
        else this.node.removeAttribute('aria-activedescendant')
    }

    /**
     *
     * @returns {GridCell}
     */
    get activeDescendant() {
        const id = this.node.getAttribute('aria-activedescendant')
        const node = id && document.getElementById(id)
        return node && node.assembler
    }
}

export function grid(init) {
    return new Grid('table', init)
}
