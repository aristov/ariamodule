import { Section } from './section'
import { Tab } from './tab'

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

/**
 * @param {{}} init
 * @returns {TabPanel}
 */
export function tabPanel(init) {
    return new TabPanel(init)
}
