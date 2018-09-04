import { MenuItemCheckBox } from './menuitemcheckbox'
import { Group } from './group'

/**
 * @summary A checkable menuitem in a set of elements with the same role,
 *  only one of which can be checked at a time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitemradio
 */
export class MenuItemRadio extends MenuItemCheckBox {
    /**
     * Activate the menu item
     */
    activate() {
        const parent = this.closest(Group) || this.menu
        parent.findAll(MenuItemRadio).forEach(item => {
            item.checked = item === this
        })
    }
}

/**
 * @param {*} [init]
 * @returns {MenuItemRadio}
 */
export function menuItemRadio(init) {
    return new MenuItemRadio(init)
}
