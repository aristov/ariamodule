import { Composite } from './composite'
import { Table } from './table'
import { shiftKey } from './gridcell'
import { NodeInit } from 'htmlmodule'

const { map } = Array.prototype

export class Grid extends Table {

    constructor(object, init) {
        super(object, {
            role : 'grid',
            className : 'grid',
        })
        this.init({
            onkeydown : this.onKeyDown.bind(this)
        })
        if(init) this.init(init)
        this.cells[0].tabIndex = 0
    }

    onKeyDown(event) {
        // if(event.shiftKey) this.mode = 'select'
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
            if(focused && shiftKey) {
                const row = focused.row
                const { min, max } = Math
                let cells, index1, index2
                if(row.multiselectable) {
                    cells = row.cells
                    cells.forEach(cell => cell.selected = 'false')
                    index1 = focused.index
                    index2 = activeDescendant.index
                } else if(this.multiselectable) {
                    cells = focused.column
                    cells.forEach(cell => cell.selected = 'false')
                    index1 = focused.row.index
                    index2 = activeDescendant.row.index
                }
                const slice = cells.slice(min(index1, index2), max(index1, index2) + 1)
                slice.forEach(cell => cell.selected = 'true')
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
