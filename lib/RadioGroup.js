import { ReadOnly } from './aria/ReadOnly'
import { Required } from './aria/Required'
import { Role } from './Role'
import { Select } from './Select'
import { Radio } from './Radio'

/**
 * @summary A group of radio buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
export class RadioGroup extends Select {
    /**
     * @returns {Radio|*|null}
     */
    get checkedRadio() {
        return this.find(Radio, ({ checked }) => checked)
    }

    /**
     * @returns {Radio[]}
     */
    get radios() {
        return this.findAll(Radio)
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

export { RadioGroup as ARIARadioGroup }

Role.RadioGroup = RadioGroup
