import { ARIAExpanded } from './ARIAExpanded'
import { RoleCommand } from './RoleCommand'
import { RoleMenu } from './RoleMenu'
import { Role } from './Role'

/**
 * An option in a set of choices contained by a menu or menubar.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitem
 */
export class RoleMenuItem extends RoleCommand {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(ARIAExpanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(ARIAExpanded)
    }

    /**
     * @returns {RoleMenuBar|RoleMenu|null}
     */
    get parentMenu() {
        return this.closest(RoleMenu)
    }

    /**
     * @returns {RoleMenu|null}
     */
    get nestedMenu() {
        return this.controls.filter(instance => instance instanceof RoleMenu)[0] || null
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleMenuItem as MenuItem }

Role.MenuItem = RoleMenuItem
