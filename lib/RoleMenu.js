import { Role } from './Role'
import { RoleSelect } from './RoleSelect'
import { RoleMenuItem } from './RoleMenuItem'

/**
 * A type of widget that offers a list of choices to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menu
 */
export class RoleMenu extends RoleSelect {
    /**
     * @returns {array.MenuItem|array.MenuItemCheckBox|array.MenuItemRadio}
     */
    get items() {
        return this.findAll(RoleMenuItem, item => {
            const menu = item.closest(RoleMenu)
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

export { RoleMenu as Menu, RoleMenu as ARIAMenu }

Role.Menu = RoleMenu
