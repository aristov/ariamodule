// uimodule
import { THead } from 'htmlmodule/lib/THead'
import { RowGroup } from './rowgroup'

export class HeadRowGroup extends RowGroup {
    /**
     * @returns {class} THead
     */
    static get elementAssembler() {
        return THead
    }
}

/**
 * @param {{}} init
 * @returns {HeadRowGroup}
 */
export function headRowGroup(init) {
    return new HeadRowGroup(init)
}
