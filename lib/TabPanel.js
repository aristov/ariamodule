import { Role } from './Role'
import { Section } from './Section'

/**
 * @summary A container for the resources associated with a tab,
 *  where each tab is contained in a tablist.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tabpanel
 */
export class TabPanel extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { TabPanel as ARIATabPanel }

Role.TabPanel = TabPanel
