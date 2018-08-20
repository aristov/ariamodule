import { Widget } from './widget'
import { TabPanel } from './tabpanel'
import { PosInSet } from './aria/posinset'
import { Selected } from './aria/selected'
import { SetSize } from './aria/setsize'

/**
 * @summary A grouping label providing a mechanism for selecting
 *  the tab content that is to be rendered to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tab
 */
export class Tab extends Widget {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = -1
        super.init(init)
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
     * todo must unselect all other tabs on $0.selected = true
     */
    set selected(selected) {
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
 * @param {*} [init]
 * @returns {Tab}
 */
export function tab(init) {
    return new Tab(init)
}
