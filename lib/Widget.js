import { Role } from './Role'
import { RoleType } from './RoleType'

/**
 * @summary An interactive component of a graphical user interface (GUI).
 * @see https://www.w3.org/TR/wai-aria-1.1/#widget
 * @abstract
 */
export class Widget extends RoleType {}

export const ARIAWidget = Role.Widget = Widget
