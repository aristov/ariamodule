import { ARIASort } from './ARIASort'
import { Role } from './Role'
import { RoleCell } from './RoleCell'

/**
 * A cell containing header information for a row in a grid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#rowheader
 * @mixes RoleGridCell
 * @mixes RoleSectionHead
 */
export class RoleRowHeader extends RoleCell {
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

export { RoleRowHeader as RowHeader }

Role.RowHeader = RoleRowHeader
