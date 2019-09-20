import { ARIASort } from './ARIASort'
import { Role } from './Role'
import { RoleCell } from './RoleCell'

/**
 * A cell containing header information for a column.
 * @see https://www.w3.org/TR/wai-aria-1.1/#columnheader
 * @mixes RoleGridCell
 * @mixes RoleSectionHead
 */
export class RoleColumnHeader extends RoleCell {
    /**
     * @param {string} sort
     */
    set sort(sort) {
        this.setAttr(ARIASort, sort)
    }

    /**
     * @returns {string}
     */
    get sort() {
        return this.getAttr(ARIASort)
    }
}

export { RoleColumnHeader as ColumnHeader }

Role.ColumnHeader = RoleColumnHeader
