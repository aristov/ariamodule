import { RoleCell } from './RoleCell'
import { RoleGridCell } from './RoleGridCell'
import { RoleGroup } from './RoleGroup'
import { Role } from './Role'
import { RoleRowHeader } from './RoleRowHeader'
import { RoleTable } from './RoleTable'
import { ARIAColIndex } from './ARIAColIndex'
import { ARIALevel } from './ARIALevel'
import { ARIAMultiSelectable } from './ARIAMultiSelectable'
import { ARIARowIndex } from './ARIARowIndex'
import { ARIASelected } from './ARIASelected'

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
        this.setAttr(ARIAColIndex, colIndex)
    }

    /**
     * @returns {number}
     */
    get colIndex() {
        return this.getAttr(ARIAColIndex) || 0
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
        this.setAttr(ARIALevel, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(ARIALevel)
    }

    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(ARIAMultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(ARIAMultiSelectable)
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
        this.setAttr(ARIARowIndex, rowIndex)
    }

    /**
     * @returns {number}
     */
    get rowIndex() {
        const index = this.getAttr(ARIARowIndex)
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
        this.setAttr(ARIASelected, selected)
    }

    /**
     * @returns {boolean|undefined}
     */
    get selected() {
        return this.getAttr(ARIASelected)
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
