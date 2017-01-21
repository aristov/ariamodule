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
        this.cells.forEach(cell => cell.selected = selected)
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

    get cells() {
        return map.call(this.node.cells, ({ assembler }) => assembler)
    }

    get prev() {
        const sibling = this.node.previousSibling
        return sibling && sibling.assembler
    }

    get next() {
        const sibling = this.node.nextSibling
        return sibling && sibling.assembler
    }

    get index() {
        return this.node.rowIndex - this.grid.rows[0].node.rowIndex
    }

    get grid() {
        return this.node.closest('table').assembler
    }
}

// Object.assign(Row.prototype, Widget.prototype)

export function row(init) {
    return new Row('tr', init)
}
