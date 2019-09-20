import { ARIALevel } from './ARIALevel'
import { ARIAMultiSelectable } from './ARIAMultiSelectable'
import { ARIAOrientation } from './ARIAOrientation'
import { Role } from './Role'
import { RoleComposite } from './RoleComposite'
import { RoleTab } from './RoleTab'

/**
 * A list of tab elements, which are references to tabpanel elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tablist
 */
export class RoleTabList extends RoleComposite {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(ARIALevel, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(ARIALevel)
    }

    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(ARIAMultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(ARIAMultiSelectable)
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(ARIAOrientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(ARIAOrientation) || 'horizontal'
    }

    /**
     * @returns {RoleTab|*}
     */
    get selectedTab() {
        return this.find(RoleTab, ({ selected }) => selected)
    }

    /**
     * @returns {RoleTab[]}
     */
    get tabs() {
        return this.findAll(RoleTab)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleTabList as TabList }

Role.TabList = RoleTabList
