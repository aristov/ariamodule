import { Cell } from './cell'

const LOCAL_NAME = 'th'
const ROW_HEADER_SCOPE = 'row'

export class RowHeader extends Cell {
    /**
     * @param {*} init
     */
    init(init) {
        this.node.scope = ROW_HEADER_SCOPE
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
 * @returns {RowHeader}
 */
export function rowHeader(init) {
    return new RowHeader(init)
}
