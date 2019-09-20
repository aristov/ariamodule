import { ARIAReadOnly } from './ARIAReadOnly'
import { ARIARequired } from './ARIARequired'
import { Role } from './Role'
import { RoleRange } from './RoleRange'

/**
 * A form of range that expects the user to select from among discrete choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 * @mixes RoleComposite
 * @mixes RoleInput
 */
export class RoleSpinButton extends RoleRange {
    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ARIAReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ARIAReadOnly)
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(ARIARequired, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(ARIARequired)
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

export { RoleSpinButton as SpinButton }

Role.SpinButton = RoleSpinButton
