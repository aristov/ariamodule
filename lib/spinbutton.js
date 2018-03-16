import { ARIARange } from './range'

/**
 * @summary A form of range that expects the user to select from among discrete choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 */
export class SpinButton extends ARIARange {}

/**
 * @param {*} [init]
 * @returns {SpinButton}
 */
export function spinButton(...init) {
    return new SpinButton(...init)
}
