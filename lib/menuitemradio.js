import { MenuItemCheckBox } from './menuitemcheckbox'

/**
 * @summary A checkable menuitem in a set of elements with the same role,
 *  only one of which can be checked at a time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitemradio
 */
export class MenuItemRadio extends MenuItemCheckBox {
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
            this.menu.items.forEach(item => {
                item.checked = item === this
            })
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
}

/**
 * @param {*} [init]
 * @returns {MenuItemRadio}
 */
export function menuItemRadio(init) {
    return new MenuItemRadio(init)
}
