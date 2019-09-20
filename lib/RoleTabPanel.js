import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A container for the resources associated with a tab,
 *  where each tab is contained in a tablist.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tabpanel
 */
export class RoleTabPanel extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleTabPanel as TabPanel }

Role.TabPanel = RoleTabPanel
