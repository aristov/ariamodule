// uimodule
import { A } from 'htmlmodule/lib/a'
import { MenuItem } from './menuitem'

export class MenuItemLink extends MenuItem {
    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return A
    }
}

/**
 * @param {*} [init]
 * @returns {MenuItemLink}
 */
export function menuItemLink(init) {
    return new MenuItemLink(init)
}
