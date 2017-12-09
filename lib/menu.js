import { Div } from 'htmlmodule'
import { Select } from './select'
import { MenuItem } from './menuitem'

export class Menu extends Select {
    /**
     * @param {*} init
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
     * @param {Node} trigger
     */
    set trigger(trigger) {
        this._trigger = trigger
    }

    /**
     * @returns {Node}
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
