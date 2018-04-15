import { Div } from 'htmlmodule'
import { Composite } from './composite'
import { Tab } from './tab'
import { Level, Multiselectable, Orientation } from './aria'

const { some } = Array.prototype
const { ELEMENT_NODE } = Node

/**
 * @summary A list of tab elements, which are references to tabpanel elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tablist
 */
export class TabList extends Composite {
    /**
     * @param {{}} [init]
     */
    init(init) {
        super.init(init)
        this.on('focus', this.onFocus.bind(this), true)
        this.on('keydown', this.onKeyDown.bind(this))
        this.setupObserver()
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const targetTab = this.getRoleOf(event.target)
        if(targetTab instanceof Tab) {
            this.tabs.forEach(tab => {
                tab.selected = String(tab === targetTab)
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
                if(key === 'ArrowUp') direction = -1
                if(key === 'ArrowDown') direction = 1
            }
            else {
                if(key === 'ArrowLeft') direction = -1
                if(key === 'ArrowRight') direction = 1
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

    setupObserver() {
        const element = this.ownerElement.node
        const observer = new MutationObserver(records => {
            for(let record of records) {
                const stop = some.call(record.addedNodes, node => {
                    if(node.nodeType === ELEMENT_NODE && node.contains(element)) {
                        this.attachPanels()
                        // this.emit('appended', { bubbles : true })
                        return true
                    }
                    else return false
                })
                if(stop) {
                    observer.disconnect()
                    break
                }
            }
        })
        observer.observe(this.node.ownerDocument, { childList : true, subtree : true })
    }

    attachPanels() {
        const panels = []
        this.tabs.forEach(tab => {
            const panel = tab.panel
            if(panel && !panel.parentNode) {
                panel.labelledBy = tab
                panel.expanded = tab.selected
                panels.push(panel)
            }
        })
        this.after(...panels)
    }

    /**
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(Level, level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(Level)
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(Multiselectable, multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(Multiselectable)
    }

    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(Orientation, orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(Orientation) || 'horizontal'
    }

    /**
     * @returns {Tab[]}
     */
    get tabs() {
        return this.findAll(Tab)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {TabList}
 */
export function tabList(...init) {
    return new TabList(...init)
}
