import { Div } from 'htmlmodule'
import { Select } from './select'
import { TreeItem } from './treeitem'
import { Multiselectable, Required } from './aria'

export class Tree extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.on('focus', this.onFocus.bind(this), true)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const element = this.getInstance(event.target)
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
     * @param {*} children
     */
    set children(children) {
        super.children = children
        const first = this.items[0]
        if(first) first.tabIndex = 0
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
export function tree(...init) {
    return new Tree(...init)
}
