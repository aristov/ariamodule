import { Widget } from './Widget'
import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import { PosInSet } from './aria/PosInSet'
import { Selected } from './aria/Selected'
import { SetSize } from './aria/SetSize'

/**
 * @summary A grouping label providing a mechanism for selecting
 *  the tab content that is to be rendered to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tab
 */
export class Tab extends Widget {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.tabIndex = -1
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('focus', this.onFocus)
        super.init(init)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        this.selected = true
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        super.controls = controls
        this.controls.forEach(panel => {
            if(panel instanceof TabPanel && !panel.labelledBy.includes(this)) {
                panel.labelledBy = this
                panel.expanded = this.selected
            }
        })
    }

    /**
     * @returns {*[]}
     */
    get controls() {
        return super.controls
    }

    /**
     * @param {number|null} posInSet
     */
    set posInSet(posInSet) {
        this.setAttr(PosInSet, posInSet)
    }

    /**
     * @returns {number|null}
     */
    get posInSet () {
        return this.getAttr(PosInSet)
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        if(selected) {
            const tabList = this.closest(TabList)
            tabList && tabList.tabs.forEach(tab => {
                if(tab !== this) {
                    tab.selected = false
                }
            })
        }
        this.controls.forEach(panel => {
            if(panel instanceof TabPanel) {
                panel.expanded = selected
            }
        })
        this.tabIndex = selected? 0 : -1
        this.setAttr(Selected, selected)
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.getAttr(Selected) || false
    }

    /**
     * @param {number|null} setSize
     */
    set setSize(setSize) {
        this.setAttr(SetSize, setSize)
    }

    /**
     * @returns {number|null}
     */
    get setSize () {
        return this.getAttr(SetSize)
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
 * @returns {Tab}
 */
export function tab(init) {
    return new Tab(init)
}
