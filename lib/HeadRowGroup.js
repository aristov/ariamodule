// uimodule
import { THead } from 'htmlmodule/lib/THead'
import { RowGroup } from './RowGroup'

export class HeadRowGroup extends RowGroup {
    /**
     * @returns {class} THead
     */
    static get elementAssembler() {
        return THead
    }
}
