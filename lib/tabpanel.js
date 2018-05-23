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
        this.labelledBy.forEach(instance => {
            if(instance instanceof Tab) {
                instance.controls = this
                this.expanded = instance.selected
            }
        })
    }

    /**
     * @returns {array.RoleAttrAssembler|array.ElementAssembler|*}
     */
    get labelledBy() {
        return super.labelledBy
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {TabPanel}
 */
export function tabPanel(init) {
    return new TabPanel(init)
}
