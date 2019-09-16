import { ReadOnly } from './aria/ReadOnly'
import { Required } from './aria/Required'
import { Role } from './Role'
import { RoleSelect } from './RoleSelect'
import { RoleRadio } from './RoleRadio'

/**
 * @summary A group of radio buttons.
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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleRadioGroup as RadioGroup, RoleRadioGroup as ARIARadioGroup }

Role.RadioGroup = RoleRadioGroup
