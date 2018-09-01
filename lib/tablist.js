import { Div } from 'htmlmodule/lib/div'
import { Composite } from './composite'
import { Tab } from './tab'
import { TabPanel } from './tabpanel'
import { Level } from './aria/level'
import { Multiselectable } from './aria/multiselectable'
import { Orientation } from './aria/orientation'

/**
 * @summary A list of tab elements, which are references to tabpanel elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tablist
 */
export class TabList extends Composite {
    /**
     * @param {{}} [init]
     */
    init(init) {
        this.on('keydown', this.onKeyDown)
        super.init(init)
        const controls = this.controls
        if(controls.length) {
            this.tabs.forEach((tab, i) => {
                tab.controls = controls.map(group => {
                    return group.findAll(TabPanel)[i]
                })
            })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const tab = this.getRoleOf(event.target, Tab)
        if(tab instanceof Tab) { 
            const tabs = this.tabs
            const key = event.key
            const index = tabs.indexOf(tab)
            let direction
            if(this.orientation === 'vertical') {
                if(key === 'ArrowUp') {
                    direction = -1
                }
                if(key === 'ArrowDown') {
                    direction = 1
                }
            }
            else {
                if(key === 'ArrowLeft') {
                    direction = -1
                }
                if(key === 'ArrowRight') {
                    direction = 1
                }
            }
            if(direction) {
                event.preventDefault()
                let nextTab = tabs[index + direction]
                if(!nextTab) {
                    nextTab = direction > 0? tabs[0] : tabs[tabs.length - 1]
                }
                nextTab.focus()
            }
        }
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = children
        if(!this.selectedTab) {
            const tab = this.tabs[0]
            if(tab) {
                tab.selected = true
            }
        }
    }

    /**
     * @returns {ElementAssembler[]}
     */
    get children() {
        return super.children
    }

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
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttr(Multiselectable, multiselectable)
    }

    /**
     * @returns {boolean}
     */
    get multiselectable() {
        return this.getAttr(Multiselectable)
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

    /**
     * @returns {class} Div
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {TabList}
 */
export function tabList(init) {
    return new TabList(init)
}
