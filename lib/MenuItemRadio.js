import { Role } from './Role'
import { MenuItemCheckBox } from './MenuItemCheckBox'

/**
 * @summary A checkable menuitem in a set of elements with the same role,
 *  only one of which can be checked at a time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitemradio
 */
export class MenuItemRadio extends MenuItemCheckBox {
}

export const ARIAMenuItemRadio = Role.MenuItemRadio = MenuItemRadio
