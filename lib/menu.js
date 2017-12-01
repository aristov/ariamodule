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
}