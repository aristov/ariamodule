import { Div } from 'htmlmodule/lib/index'
import { Composite } from './composite'

export class TabList extends Composite {
    /**
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return Div
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
