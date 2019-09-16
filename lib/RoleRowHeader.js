import { Role } from './Role'
import { RoleCell } from './RoleCell'
import { Sort } from './aria/Sort'

/**
 * @summary A cell containing header information for a row in a grid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#rowheader
 */
export class RoleRowHeader extends RoleCell {
    /**
     * @param {string} sort
     */
    set sort(sort) {
        this.setAttr(Sort, sort)
    }

    /**
     * @returns {string}
     */
    get sort() {
        return this.getAttr(Sort)
    }
}

export { RoleRowHeader as RowHeader, RoleRowHeader as ARIARowHeader }

Role.RowHeader = RoleRowHeader
