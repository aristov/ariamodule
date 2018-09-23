import { Role } from './Role'
import { Cell } from './Cell'
import { Sort } from './aria/Sort'

/**
 * @summary A cell containing header information for a row in a grid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#rowheader
 */
export class RowHeader extends Cell {
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

Role.RowHeader = RowHeader
