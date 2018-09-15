import { Th } from 'htmlmodule/lib/Th'
import { Cell } from './Cell'

const COLUMN_HEADER_SCOPE = 'col'

/**
 * @summary A cell containing header information for a column.
 * @see https://www.w3.org/TR/wai-aria-1.1/#columnheader
 */
export class ColumnHeader extends Cell {
    /**
     * @param {{}} init
     */
    init(init) {
        this.ownerElement.scope = COLUMN_HEADER_SCOPE
        super.init(init)
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Th
    }
}

/**
 * @param {{}} init
 * @returns {ColumnHeader}
 */
export function columnHeader(init) {
    return new ColumnHeader(init)
}