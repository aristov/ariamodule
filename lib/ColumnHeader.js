import { Cell } from './Cell'
import { Role } from './Role'
import { Sort } from './aria/Sort'

/**
 * @summary A cell containing header information for a column.
 * @see https://www.w3.org/TR/wai-aria-1.1/#columnheader
 */
export class ColumnHeader extends Cell {
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

export const ARIAColumnHeader = Role.ColumnHeader = ColumnHeader
