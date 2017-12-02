import { Tr } from 'htmlmodule'
import { Cell } from './cell'
import { Grid } from './grid'
import { GridCell } from './gridcell'
import { Group } from './group'
import { RowGroup } from './rowgroup'
import { RowHeader } from './rowheader'
import { Table } from './table'
import { ColIndex, Level, Multiselectable, RowIndex, Selected } from './aria'

export class Row extends Group {
    /**
     * @returns {RowGroup}
     */
    get body() {
        return this.closest(RowGroup)
    }

    /**
     * @returns {(Cell)[]}
     */
    get cells() {
        return this.findAll(Cell)
    }

    /**
     * @param {Number} colIndex
     */
    set colIndex(colIndex) {
        this.setAttribute(ColIndex, colIndex)
    }

    /**
     * @returns {Number}
     */
    get colIndex() {
        return this.getAttribute(ColIndex)
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
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
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(Level, level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(Level)
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(Multiselectable, multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(Multiselectable)
    }

    /**
     * @returns {Row}
     */
    get next() {
        return this.nextElementSibling
    }

    /**
     * @returns {Row}
     */
    get prev() {
        return this.previousElementSibling
    }

    /**
     * @param {Number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.setAttribute(RowIndex, rowIndex)
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        const index = this.getAttribute(RowIndex)
        return isNaN(index)? this.elementIndex : index
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        this.setAttribute(Selected, selected)
    }

    /**
     * @returns {String}
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
 * @param {*} init
 * @returns {Row}
 */
export function row(...init) {
    return new Row(...init)
}
