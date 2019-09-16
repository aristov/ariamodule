import { RoleCell } from './RoleCell'
import { RoleGridCell } from './RoleGridCell'
import { RoleGroup } from './RoleGroup'
import { Role } from './Role'
import { RoleRowHeader } from './RoleRowHeader'
import { RoleTable } from './RoleTable'
import { ColIndex } from './aria/ColIndex'
import { Level } from './aria/Level'
import { MultiSelectable } from './aria/MultiSelectable'
import { RowIndex } from './aria/RowIndex'
import { Selected } from './aria/Selected'

/**
 * @summary A row of cells in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#row
 */
export class RoleRow extends RoleGroup {
    /**
     * @returns {RoleCell[]}
     */
    get cells() {
        return this.findAll(RoleCell)
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
     * @returns {(RoleGridCell)[]}
     */
    get gridCells() {
        return this.findAll(RoleGridCell)
    }

    /**
     * @returns {RoleRowHeader|null}
     */
    get rowHeader() {
        return this.find(RoleRowHeader)
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
     * @returns {RoleRow}
     */
    get nextRow() {
        const rows = (this.rowGroup || this.table).rows
        return rows[this.rowIndex + 1] || null
    }

    /**
     * @returns {RoleRow}
     */
    get prevRow() {
        const rows = (this.rowGroup || this.table).rows
        return rows[this.rowIndex - 1] || null
    }

    /**
     * @returns {RoleRowGroup}
     */
    get rowGroup() {
        return this.closest(Role.RowGroup)
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
     * @returns {RoleTable|null}
     */
    get table() {
        return this.closest(Role.Table)
    }
}

export { RoleRow as Row, RoleRow as ARIARow }

Role.Row = RoleRow
