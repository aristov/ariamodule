import { Role } from './Role'
import { Section } from './Section'
import { Tab } from './Tab'

/**
 * @summary A container for the resources associated with a tab,
 *  where each tab is contained in a tablist.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tabpanel
 */
export class TabPanel extends Section {
    /**
     * @param {*} labelledBy
     */
    set labelledBy(labelledBy) {
        super.labelledBy = labelledBy
        this.labelledBy.forEach(tab => {
            if(tab instanceof Tab && !tab.controls.includes(this)) {
                tab.controls = this
                this.expanded = tab.selected
            }
        })
    }

    /**
     * @returns {array}
     */
    get labelledBy() {
        return super.labelledBy
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.TabPanel = TabPanel
