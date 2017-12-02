import { Th } from 'htmlmodule'
import { Cell } from './cell'

const COLUMN_HEADER_SCOPE = 'col'

export class ColumnHeader extends Cell {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.ownerElement.scope = COLUMN_HEADER_SCOPE
        super.init(init)
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
export function columnHeader(...init) {
    return new ColumnHeader(...init)
}
