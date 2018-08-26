import { Div } from 'htmlmodule/lib/div'
import { Select } from './select'
import { MenuItem } from './menuitem'

/**
 * @summary A type of widget that offers a list of choices to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menu
 */
export class Menu extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._trigger = null
        super.init(init)
    }

    focus() {
        if(this.trigger) {
            this.trigger.focus()
        }
    }

    /**
     * @returns {[MenuItem]}
     */
    get items() {
        return this.findAll(MenuItem)
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
