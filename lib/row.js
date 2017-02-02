import { Group } from './group'

const { map } = Array.prototype

export class Row extends Group {

    set selected(selected) {
        this.cells.forEach(cell => cell.selected = selected)
        this.node.setAttribute('aria-selected', selected)
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
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

    set level(level) {
        this.node.setAttribute('aria-level', level)
    }

    get level() {
        return this.node.getAttribute('aria-level')
    }

    set colIndex(colIndex) {
        this.node.setAttribute('aria-colindex', colIndex)
    }

    get colIndex() {
        return this.node.getAttribute('aria-colindex')
    }

    set rowIndex(rowIndex) {
        this.node.setAttribute('aria-rowindex', rowIndex)
    }

    get rowIndex() {
        return this.node.getAttribute('aria-rowindex') ||
            this.node.rowIndex - this.body.rows[0].node.rowIndex
    }

    get grid() {
        return this.node.closest('table').assembler
    }

    get cells() {
        return map.call(this.node.cells, ({ assembler }) => assembler)
    }

    get body() {
        return this.parentNode.assembler
    }

    get index() {
        return this.node.rowIndex - this.body.rows[0].node.rowIndex
    }

    get prev() {
        const sibling = this.node.previousSibling
        return sibling && sibling.assembler
    }

    get next() {
        const sibling = this.node.nextSibling
        return sibling && sibling.assembler
    }

    static get role() {
        return ['row', super.role]
    }

    static get classList() {
        return ['row', super.classList]
    }
}

// Object.assign(Row.prototype, Widget.prototype)

export function row(init) {
    return new Row('tr', init)
}
