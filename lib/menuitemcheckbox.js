import { MenuItem } from './menuitem'
import { Checked } from './aria/checked'

/**
 * @summary A menuitem with a checkable state whose possible values are true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox
 */
export class MenuItemCheckBox extends MenuItem {
    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        super.onClick(event)
        if(!event.defaultPrevented) {
            this.checked = !this.checked
            if(event.isTrusted) {
                const menu = this.menu
                if(menu.expanded) {
                    const trigger = menu.trigger
                    trigger.focus()
                    trigger.expanded = false
                }
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

/**
 * @param {*} [init]
 * @returns {MenuItemCheckBox}
 */
export function menuItemCheckbox(init) {
    return new MenuItemCheckBox(init)
}
