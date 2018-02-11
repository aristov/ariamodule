import { Div } from 'htmlmodule'
import { Composite } from './composite'
import { Tab } from './tab'
import { Level, Multiselectable, Orientation } from './aria'

export class TabList extends Composite {
    /**
     * @param {{}} [init]
     */
    init(init) {
        this.on('focus', this.onFocus.bind(this), true)
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const targetTab = this.getRole(event.target)
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
        const tab = this.getRole(event.target, Tab)
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

    /**
     * @param {ParentNodeAssembler|*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        this.tabs.forEach(tab => {
            const panel = tab.panel
            if(panel && !panel.parentNode) {
                panel.labelledBy = tab
                panel.expanded = tab.selected
                panel.parentNode = parentNode
            }
        })
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
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
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return Div
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
