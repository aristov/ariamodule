import { Cell } from './cell'

const LOCAL_NAME = 'th'
const COLUMN_HEADER_SCOPE = 'col'

export class ColumnHeader extends Cell {
    /**
     * @param {*} init
     */
    init(init) {
        this.node.scope = COLUMN_HEADER_SCOPE
        super.init(init)
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {ColumnHeader}
 */
export function columnHeader(...init) {
    return new ColumnHeader(...init)
}
