import { ARIAColIndex } from './ARIAColIndex'
import { ARIAColSpan } from './ARIAColSpan'
import { ARIARowIndex } from './ARIARowIndex'
import { ARIARowSpan } from './ARIARowSpan'
import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A cell in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#cell
 */
export class RoleCell extends RoleSection {
    /**
     * @returns {RoleGridCell[]}
     */
    get column() {
        const owner = this.rowGroup || this.grid
        const index = this.colIndex
        return owner.findAll(RoleCell, ({ colIndex }) => colIndex === index)
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
        const index = this.getAttr(ARIAColIndex)
        return index === null?
            this.row.cells.indexOf(this) :
            index
    }

    /**
     * @param {number} colSpan
     */
    set colSpan(colSpan) {
        this.setAttr(ARIAColSpan, colSpan)
    }

    /**
     * @returns {number}
     */
    get colSpan() {
        return this.getAttr(ARIAColSpan)
    }

    /**
     * @returns {RoleColumnHeader|null}
     */
    get columnHeader() {
        const index = this.colIndex
        return this.table.find(Role.ColumnHeader, ({ colIndex }) => colIndex === index)
    }

    /**
     * @returns {RoleGrid}
     */
    get grid() {
        return this.closest(Role.Grid)
    }

    /**
     * @returns {RoleRow|null}
     */
    get row() {
        return this.closest(Role.Row)
    }

    /**
     * @returns {RoleRowGroup|null}
     */
    get rowGroup() {
        return this.closest(Role.RowGroup)
    }

    /**
     * @returns {RoleRowHeader}
     */
    get rowHeader() {
        return this.row.rowHeader
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
        return index === null?
            this.row.rowIndex :
            index
    }

    /**
     * @param {number} rowSpan
     */
    set rowSpan(rowSpan) {
        this.setAttr(ARIARowSpan, rowSpan)
    }

    /**
     * @returns {number}
     */
    get rowSpan() {
        return this.getAttr(ARIARowSpan)
    }

    /**
     * @returns {RoleTable|null}
     */
    get table() {
        return this.closest(Role.Table)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleCell as Cell }

Role.Cell = RoleCell
