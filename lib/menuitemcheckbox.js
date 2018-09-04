import { MenuItem } from './menuitem'

/**
 * @summary A menuitem with a checkable state whose possible values are true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox
 */
export class MenuItemCheckBox extends MenuItem {}

/**
 * @param {*} [init]
 * @returns {MenuItemCheckBox}
 */
export function menuItemCheckbox(init) {
    return new MenuItemCheckBox(init)
}
