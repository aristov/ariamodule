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
        this._panel = null
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * @param {TabPanel|null} panel
     */
    set panel(panel) {
        if(panel instanceof TabPanel) {
            this.controls = this._panel = panel
        }
        else this.controls = this._panel = null
    }

    /**
     * @returns {TabPanel|null}
     */
    get panel() {
        return this._panel
    }

    /**
     * @param {Number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttribute(PosInSet, posInSet)
    }

    /**
     * @returns {Number}
     */
    get posInSet () {
        return this.getAttribute(PosInSet)
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        this.controls.forEach(panel => {
            if(panel) {
                panel.expanded = selected
            }
        })
        this.tabIndex = selected === 'true'? 0 : -1
        this.setAttribute(Selected, selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(Selected) || 'false'
    }

    /**
     * @param {Number} setSize
     */
    set setSize(setSize) {
        this.setAttribute(SetSize, setSize)
    }

    /**
     * @returns {Number}
     */
    get setSize () {
        return this.getAttribute(SetSize)
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
 * @returns {Tab}
 */
export function tab(init) {
    return new Tab(init)
}
