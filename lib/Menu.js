import { Role } from './Role'
import { Select } from './Select'
import { MenuItem } from './MenuItem'

/**
 * @summary A type of widget that offers a list of choices to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menu
 */
export class Menu extends Select {
    /**
     * @returns {array.MenuItem|array.MenuItemCheckBox|array.MenuItemRadio}
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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { Menu as ARIAMenu }

Role.Menu = Menu
