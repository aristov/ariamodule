import { Div } from 'htmlmodule'
import { Section } from './section'

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
