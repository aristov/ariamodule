import { Table } from './table'

const { map, filter } = Array.prototype

export class Grid extends Table {

    init(init) {
        this.role = 'grid'
        this.className = 'grid'
        super.init(init)
    }

    /**
     * Select or deselect all the grid cells
     * @param {String} selected
     */
    set selected(selected) {
        this.cells.forEach(cell => cell.selected = selected)
    }

    /**
     *
     * @returns {boolean}
     */
    get readOnly() {
        return this.node.getAttribute('aria-readonly') === 'true'
    }

    /**
     *
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        if(readOnly) this.node.setAttribute('aria-readonly', 'true')
        else this.node.removeAttribute('aria-readonly')
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
            if(focused && focused.selected) {
                const row = focused.row
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
                if(cells) {
                    const selection = cells.slice(
                        Math.min(index1, index2),
                        Math.max(index1, index2) + 1)
                    selection.forEach(cell => cell.selected = 'true')
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

    // todo => table
    get head() {
        return this.node.tHead.assembler
    }

    // todo => table
    get bodies() {
        return map.call(this.node.tBodies, ({ assembler }) => assembler)
    }

    // todo => table
    get rows() {
        const { rows } = this.node
        const handler = ({ assembler }) => assembler
        return filter.call(rows, handler).map(handler)
    }

    // todo => table
    get cells() {
        const selector = 'td[role=gridcell]'
        const collection = this.node.querySelectorAll(selector)
        const handler = ({ assembler }) => assembler
        return map.call(collection, handler)
    }

    set level(level) {
        this.node.setAttribute('aria-level', level)
    }

    get level() {
        return this.node.getAttribute('aria-level')
    }

    /**
     *
     * @param {*} children
     */
    set children(children) {
        super.children = children
        if(!this.cells.some(c => c.tabIndex === 0)) {
            const first = this.cells[0]
            if(first) first.tabIndex = 0
        }
    }
}

export function grid(init) {
    return new Grid('table', init)
}
