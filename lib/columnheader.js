import { Th } from 'htmlmodule/lib/th'
import { Cell } from './cell'

const COLUMN_HEADER_SCOPE = 'col'

/**
 * @summary A cell containing header information for a column.
 * @see https://www.w3.org/TR/wai-aria-1.1/#columnheader
 */
export class ColumnHeader extends Cell {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.ownerElement.scope = COLUMN_HEADER_SCOPE
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Th
    }
}

/**
 * @param {*} [init]
 * @returns {ColumnHeader}
 */
export function columnHeader(init) {
    return new ColumnHeader(init)
}
