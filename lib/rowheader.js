import { Th } from 'htmlmodule'
import { Cell } from './cell'

const ROW_HEADER_SCOPE = 'row'

export class RowHeader extends Cell {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.ownerElement.scope = ROW_HEADER_SCOPE
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
 * @returns {RowHeader}
 */
export function rowHeader(...init) {
    return new RowHeader(...init)
}
