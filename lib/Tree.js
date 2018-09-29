import { Role } from './Role'
import { Div } from 'htmlmodule/lib/Div'
import { Select } from './Select'
import { TreeItem } from './TreeItem'
import { MultiSelectable } from './aria/MultiSelectable'
import { Required } from './aria/Required'

/**
 * @summary A type of select that may contain sub-level
 *  nested groups that can be collapsed and expanded.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tree
 */
export class Tree extends Select {
    /**
     * @param {{}} init
     */
    init(init) {
        this.on('focusin', this.onFocusIn)
        super.init(init)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocusIn(event) {
        const target = this.getRoleOf(event.target)
        if(target instanceof TreeItem) {
            this.items.forEach(item => {
                const isTarget = item === target
                item.selected = isTarget
                item.tabIndex = isTarget? 0 : -1
            })
        }
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = children
        const item = this.items[0]
        if(item) {
            item.tabIndex = 0
        }
    }

    /**
     * @returns {ElementAssembler[]}
     */
    get children() {
        return super.children
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
        super.orientation = orientation
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return super.orientation || 'vertical'
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(Required, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(Required)
    }

    /**
     * @returns {TreeItem[]}
     */
    get items() {
        return this.findAll(TreeItem)
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

Role.Tree = Tree
