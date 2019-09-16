import { Role } from './Role'
import { RoleMenuItem } from './RoleMenuItem'
import { ARIAChecked } from './ARIAChecked'

/**
 * @summary A menuitem with a checkable state whose possible values are true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox
 */
export class RoleMenuItemCheckBox extends RoleMenuItem {
    /**
     * @param {boolean} checked
     */
    set checked(checked) {
        this.setAttr(ARIAChecked, checked)
    }

    /**
     * @returns {boolean}
     */
    get checked() {
        return this.getAttr(ARIAChecked) || false
    }
}

export { RoleMenuItemCheckBox as MenuItemCheckBox, RoleMenuItemCheckBox as ARIAMenuItemCheckBox }

Role.MenuItemCheckBox = RoleMenuItemCheckBox
