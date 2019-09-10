import { Role } from './Role'
import { Input } from './Input'
import { Checked } from './aria/Checked'
import { ReadOnly } from './aria/ReadOnly'

/**
 * @summary A checkable input that has three possible values: true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#checkbox
 */
export class CheckBox extends Input {
    /**
     * @param {boolean|string} checked
     */
    set checked(checked) {
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean|string}
     */
    get checked() {
        return this.getAttr(Checked) || false
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIACheckBox = Role.CheckBox = CheckBox
