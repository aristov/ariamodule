import { Role } from './Role'
import { Composite } from './Composite'
import { Tab } from './Tab'
import { Level } from './aria/Level'
import { MultiSelectable } from './aria/MultiSelectable'
import { Orientation } from './aria/Orientation'

/**
 * @summary A list of tab elements, which are references to tabpanel elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tablist
 */
export class TabList extends Composite {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(Level)
    }

    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(MultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(MultiSelectable)
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(Orientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(Orientation) || 'horizontal'
    }

    /**
     * @returns {Tab|*}
     */
    get selectedTab() {
        return this.find(Tab, ({ selected }) => selected)
    }

    /**
     * @returns {Tab[]}
     */
    get tabs() {
        return this.findAll(Tab)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIATabList = Role.TabList = TabList
