// uimodule
import { THead } from 'htmlmodule/lib/thead'
import { RowGroup } from './rowgroup'

export class HeadRowGroup extends RowGroup {
    /**
     * @returns {Function} THead
     */
    static get elementAssembler() {
        return THead
    }
}

/**
 * @param {*} [init]
 * @returns {HeadRowGroup}
 */
export function headRowGroup(init) {
    return new HeadRowGroup(init)
}
