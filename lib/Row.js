import { Tr } from 'htmlmodule/lib/Tr'
import { Cell } from './Cell'
import { Grid } from './Grid'
import { GridCell } from './GridCell'
import { Group } from './Group'
import { RowGroup } from './RowGroup'
import { RowHeader } from './RowHeader'
import { Table } from './Table'
import { ColIndex } from './aria/ColIndex'
import { Level } from './aria/Level'
import { MultiSelectable } from './aria/MultiSelectable'
import { RowIndex } from './aria/RowIndex'
import { Selected } from './aria/Selected'

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
        this.setAttr(ColIndex, colIndex)
    }

    /**
     * @returns {number}
     */
    get colIndex() {
        return this.getAttr(ColIndex)
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
        this.setAttr(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(Level)
    }

    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(MultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(MultiSelectable)
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
        this.setAttr(RowIndex, rowIndex)
    }

    /**
     * @returns {number}
     */
    get rowIndex() {
        const index = this.getAttr(RowIndex)
        return index === null? this.elementIndex : index
    }

    /**
     * @param {boolean|undefined} selected
     */
    set selected(selected) {
        this.setAttr(Selected, selected)
    }

    /**
     * @returns {boolean|undefined}
     */
    get selected() {
        return this.getAttr(Selected)
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(Table)
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Tr
    }
}

/**
 * @param {{}} init
 * @returns {Row}
 */
export function row(init) {
    return new Row(init)
}
