import { RoleCell } from './RoleCell'
import { Role } from './Role'
import { RoleRow } from './RoleRow'
import { RoleRowGroup } from './RoleRowGroup'
import { RoleSection } from './RoleSection'
import { ColCount } from './aria/ColCount'
import { RowCount } from './aria/RowCount'

const { map } = Array.prototype

/**
 * @summary A section containing data arranged in rows and columns.
 * @see https://www.w3.org/TR/wai-aria-1.1/#table
 */
export class RoleTable extends RoleSection {
    /**
     * @returns {RoleRowGroup[]}
     */
    get rowGroups() {
        return this.findAll(RoleRowGroup)
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
        this.setAttr(ColCount, colCount)
    }

    /**
     * @returns {number}
     */
    get colCount() {
        return this.getAttr(ColCount)
    }

    /**
     * @param {number} rowCount
     */
    set rowCount(rowCount) {
        this.setAttr(RowCount, rowCount)
    }

    /**
     * @returns {number}
     */
    get rowCount() {
        return this.getAttr(RowCount)
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

export { RoleTable as Table, RoleTable as ARIATable }

Role.Table = RoleTable
