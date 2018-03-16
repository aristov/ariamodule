import { Div } from 'htmlmodule'
import { Section } from './section'

/**
 * @summary A container for the resources associated with a tab,
 *  where each tab is contained in a tablist.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tabpanel
 */
export class TabPanel extends Section {
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
