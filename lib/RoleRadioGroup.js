import { ARIAReadOnly } from './ARIAReadOnly'
import { ARIARequired } from './ARIARequired'
import { Role } from './Role'
import { RoleSelect } from './RoleSelect'
import { RoleRadio } from './RoleRadio'

/**
 * A group of radio buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
export class RoleRadioGroup extends RoleSelect {
    /**
     * @returns {RoleRadio|*|null}
     */
    get checkedRadio() {
        return this.find(RoleRadio, ({ checked }) => checked)
    }

    /**
     * @returns {RoleRadio[]}
     */
    get radios() {
        return this.findAll(RoleRadio)
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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleRadioGroup as RadioGroup }

Role.RadioGroup = RoleRadioGroup
