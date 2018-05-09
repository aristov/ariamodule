import { Div } from 'htmlmodule'
import { Select } from './select'
import { TreeItem } from './treeitem'
import { Multiselectable, Required } from './aria'

/**
 * @summary A type of list that may contain sub-level
 *  nested groups that can be collapsed and expanded.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tree
 */
export class Tree extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        const item = this.items[0]
        if(item) item.tabIndex = 0
        this.on('focus', this.onFocus.bind(this), true)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const element = this.getInstanceOf(event.target)
        const role = element.role
        if(role instanceof TreeItem) {
            this.items.forEach(item => {
                item.tabIndex = item === role? 0 : -1
            })
        }
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
     * @param {Boolean} required
     */
    set required(required) {
        this.setAttribute(Required, 'true')
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.getAttribute(Required)
    }

    /**
     * @returns {Array}
     */
    get items() {
        return this.findAll(TreeItem)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {Tree}
 */
export function tree(init) {
    return new Tree(init)
}
