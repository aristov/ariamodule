import { Cell } from './Cell'
import { GridCell } from './GridCell'
import { Group } from './Group'
import { Role } from './Role'
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
    get rowGroup() {
        return this.closest(Role.RowGroup)
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
        return this.getAttr(ColIndex) || 0
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
    get rowHeader() {
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
        const rows = (this.rowGroup || this.table).rows
        return rows[this.rowIndex + 1] || null
    }

    /**
     * @returns {Row}
     */
    get prevRow() {
        const rows = (this.rowGroup || this.table).rows
        return rows[this.rowIndex - 1] || null
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
        if(index === null) {
            const rows = (this.rowGroup || this.table).rows
            return rows.indexOf(this)
        }
        return index
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
        return this.closest(Role.Table)
    }
}

Role.Row = Row
