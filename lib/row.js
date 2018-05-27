import { Tr } from 'htmlmodule/lib/tr'
import { Cell } from './cell'
import { Grid } from './grid'
import { GridCell } from './gridcell'
import { Group } from './group'
import { RowGroup } from './rowgroup'
import { RowHeader } from './rowheader'
import { Table } from './table'
import { ColIndex } from './aria/colindex'
import { Level } from './aria/level'
import { Multiselectable } from './aria/multiselectable'
import { RowIndex } from './aria/rowindex'
import { Selected } from './aria/selected'

/**
 * @summary A row of cells in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#row
 */
export class Row extends Group {
    /**
     * @returns {RowGroup}
     */
    get body() {
        return this.closest(RowGroup)
    }

    /**
     * @returns {Cell[]}
     */
    get cells() {
        return this.findAll(Cell)
    }

    /**
     * @param {number} colIndex
     */
    set colIndex(colIndex) {
        this.setAttribute(ColIndex, colIndex)
    }

    /**
     * @returns {number}
     */
    get colIndex() {
        return this.getAttribute(ColIndex)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        const table = this.table
        return table && table.disabled || super.disabled
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.closest(Grid)
    }

    /**
     * @returns {(GridCell)[]}
     */
    get gridCells() {
        return this.findAll(GridCell)
    }

    /**
     * @returns {RowHeader|null}
     */
    get header() {
        return this.find(RowHeader)
    }

    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttribute(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttribute(Level)
    }

    /**
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(Multiselectable, multiselectable)
    }

    /**
     * @returns {boolean}
     */
    get multiselectable() {
        return this.getAttribute(Multiselectable)
    }

    /**
     * @returns {Row}
     */
    get nextRow() {
        const element = this.ownerElement.nextElementSibling
        return element && this.getRoleOf(element)
    }

    /**
     * @returns {Row}
     */
    get previousRow() {
        const element = this.ownerElement.previousElementSibling
        return element && this.getRoleOf(element)
    }

    /**
     * @param {number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.setAttribute(RowIndex, rowIndex)
    }

    /**
     * @returns {number}
     */
    get rowIndex() {
        const index = this.getAttribute(RowIndex)
        return index === null? this.elementIndex : index
    }

    /**
     * @param {boolean|undefined} selected
     */
    set selected(selected) {
        this.setAttribute(Selected, selected)
    }

    /**
     * @returns {boolean|undefined}
     */
    get selected() {
        return this.getAttribute(Selected)
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(Table)
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Tr
    }
}

/**
 * @param {*} [init]
 * @returns {Row}
 */
export function row(init) {
    return new Row(init)
}
