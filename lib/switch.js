import { Checkbox } from './checkbox'

/**
 * @summary A type of checkbox that represents on/off values,
 *  as opposed to checked/unchecked values.
 * @see https://www.w3.org/TR/wai-aria-1.1/#switch
 */
export class Switch extends Checkbox {}

/**
 * @param {*} [init]
 * @returns {Switch}
 */
export function ariaSwitch(init) {
    return new Switch(init)
}
