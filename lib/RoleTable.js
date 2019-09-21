import { ARIAColCount } from './ARIAColCount'
import { ARIARowCount } from './ARIARowCount'
import { Role } from './Role'
import { RoleCaption } from './RoleCaption'
import { RoleCell } from './RoleCell'
import { RoleRow } from './RoleRow'
import { RoleRowGroup } from './RoleRowGroup'
import { RoleSection } from './RoleSection'

const { map } = Array.prototype

/**
 * A section containing data arranged in rows and columns.
 * @see https://www.w3.org/TR/wai-aria-1.1/#table
 */
export class RoleTable extends RoleSection {
    /**
     * @returns {RoleCaption|*}
     */
    get caption() {
        return this.find(RoleCaption)
    }

    /**
     * @returns {RoleCell[]}
     */
    get cells() {
        return this.findAll(RoleCell)
    }

    /**
     * @param {number} colCount
     */
    set colCount(colCount) {
        this.setAttr(ARIAColCount, colCount)
    }

    /**
     * @returns {number}
     */
    get colCount() {
        return this.getAttr(ARIAColCount)
    }

    /**
     * @param {number} rowCount
     */
    set rowCount(rowCount) {
        this.setAttr(ARIARowCount, rowCount)
    }

    /**
     * @returns {number}
     */
    get rowCount() {
        return this.getAttr(ARIARowCount)
    }

    /**
     * @returns {RoleRowGroup[]}
     */
    get rowGroups() {
        return this.findAll(RoleRowGroup)
    }

    /**
     * @returns {RoleRow[]}
     */
    get rows() {
        return this.findAll(RoleRow)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleTable as Table }

Role.Table = RoleTable
