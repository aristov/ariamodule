import { ARIAChecked } from './ARIAChecked'
import { ARIAReadOnly } from './ARIAReadOnly'
import { Role } from './Role'
import { RoleInput } from './RoleInput'

/**
 * A checkable input that has three possible values: true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#checkbox
 */
export class RoleCheckBox extends RoleInput {
    /**
     * @param {boolean|string} checked
     */
    set checked(checked) {
        this.setAttr(ARIAChecked, checked)
    }

    /**
     * @returns {boolean|string}
     */
    get checked() {
        return this.getAttr(ARIAChecked) || false
    }

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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleCheckBox as CheckBox }

Role.CheckBox = RoleCheckBox
