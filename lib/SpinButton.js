import { Range } from './Range'
import { Role } from './Role'
import { ReadOnly } from './aria/ReadOnly'
import { Required } from './aria/Required'

/**
 * @summary A form of range that expects the user to select from among discrete choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 */
export class SpinButton extends Range {
    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(Required, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(Required)
    }

    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    /**
     * @returns {number}
     */
    get valueMin() {
        const valueMin = super.valueMin
        return valueMin === null? -Infinity : valueMin
    }

    /**
     * @param {number} valueMax
     */
    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

    /**
     * @returns {number}
     */
    get valueMax() {
        const valueMax = super.valueMax
        return valueMax === null? Infinity : valueMax
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { SpinButton as ARIASpinButton }

Role.SpinButton = SpinButton
