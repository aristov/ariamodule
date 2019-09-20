import { Role } from './Role'
import { RoleGroup } from './RoleGroup'
import { RoleMenuItem } from './RoleMenuItem'
import { RoleSelect } from './RoleSelect'

/**
 * A type of widget that offers a list of choices to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menu
 */
export class RoleMenu extends RoleSelect {
    /**
     * @returns {array.RoleMenuItem|*}
     */
    get items() {
        return this.findAll(RoleMenuItem, item => {
            const menu = item.parentMenu
            return !menu || menu === this
        })
    }

    /**
     * @returns {array.RoleGroup|*}
     */
    get groups() {
        return this.findAll(RoleGroup, group => {
            const menu = group.closest(RoleMenu)
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

export { RoleMenu as Menu }

Role.Menu = RoleMenu
