import { Div } from 'htmlmodule'
import { Select } from './select'
import { MenuItem } from './menuitem'

/**
 * @summary A type of widget that offers a list of choices to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menu
 */
export class Menu extends Select {
    /**
     * @param {*} init
     */
    init(init) {
        super.init(init)
        this._trigger = null
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
     * @param {RoleAttrAssembler} trigger
     */
    set trigger(trigger) {
        this._trigger = trigger
    }

    /**
     * @returns {RoleAttrAssembler}
     */
    get trigger() {
        return this._trigger
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
