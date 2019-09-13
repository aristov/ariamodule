import { Role } from './Role'
import { CheckBox } from './CheckBox'

/**
 * @summary A type of checkbox that represents on/off values,
 *  as opposed to checked/unchecked values.
 * @see https://www.w3.org/TR/wai-aria-1.1/#switch
 */
export class Switch extends CheckBox {}

export { Switch as ARIASwitch }

Role.Switch = Switch
