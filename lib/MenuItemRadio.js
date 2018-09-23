import { Role } from './Role'
import { MenuItemCheckBox } from './MenuItemCheckBox'
import { Group } from './Group'

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
        if(this.checked) return
        const parent = this.closest(Group) || this.parentMenu
        parent.findAll(MenuItemRadio).forEach(item => {
            item.checked = false
        })
        super.activate()
    }
}

Role.MenuItemRadio = MenuItemRadio
