import { Div } from 'htmlmodule/lib/div'
import { Select } from './select'
import { MenuItem } from './menuitem'

let undefined

/**
 * @summary A type of widget that offers a list of choices to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menu
 */
export class Menu extends Select {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this._trigger = null
    }

    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('mouseleave', this.onMouseLeave)
        super.init(init)
    }

    /**
     * Focus the trigger element
     */
    focus() {
        this._trigger && this._trigger.focus()
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseLeave(event) {
        if(this.expanded !== undefined && this.contains(document.activeElement)) {
            this.focus()
        }
    }

    /**
     * @param {boolean} expanded
     */
    set expanded(expanded) {
        this.hidden = !expanded
    }

    /**
     * @returns {boolean}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
        super.expanded = !hidden
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return super.hidden
    }

    /**
     * @returns {[MenuItem]}
     */
    get items() {
        return this.findAll(MenuItem, item => {
            const menu = item.closest(Menu)
            return !menu || menu === this
        })
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
     * @returns {Menu|*}
     */
    get parentMenu() {
        return this.parentNode.closest(Menu)
    }

    /**
     * @param {Role} trigger
     */
    set trigger(trigger) {
        this._trigger = trigger
    }

    /**
     * @returns {Role}
     */
    get trigger() {
        return this._trigger
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {Menu}
 */
export function menu(init) {
    return new Menu(init)
}
