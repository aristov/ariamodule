import { THead } from 'htmlmodule'
import { RowGroup } from './rowgroup'

export class HeadRowGroup extends RowGroup {
    /**
     * @returns {Function} THead
     */
    static get elementAssembler() {
        return THead
    }
}
