import { Expanded } from './aria/Expanded'
import { Command } from './Command'
import { Menu } from './Menu'
import { Role } from './Role'

/**
 * @summary An option in a set of choices contained by a menu or menubar.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitem
 */
export class MenuItem extends Command {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @returns {MenuBar|Menu|null}
     */
    get parentMenu() {
        return this.closest(Menu)
    }

    /**
     * @returns {Menu|null}
     */
    get nestedMenu() {
        return this.controls.filter(instance => instance instanceof Menu)[0] || null
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIAMenuItem = Role.MenuItem = MenuItem
