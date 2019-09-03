import { Role } from './Role'
import { MenuItem } from './MenuItem'
import { Checked } from './aria/Checked'

/**
 * @summary A menuitem with a checkable state whose possible values are true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox
 */
export class MenuItemCheckBox extends MenuItem {
    /**
     * Activate the menu item
     */
    activate() {
        this.checked = !this.checked
        this.emit('change', { bubbles : true })
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.preventDefault()
            event.stopImmediatePropagation()
        }
        else {
            event.stopPropagation()
            this.activate()
            if(event.isTrusted) {
                this.collapse()
            }
        }
    }

    /**
     * @param {boolean} checked
     */
    set checked(checked) {
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean}
     */
    get checked() {
        return this.getAttr(Checked) || false
    }
}

export const ARIAMenuItemCheckBox = Role.MenuItemCheckBox = MenuItemCheckBox
