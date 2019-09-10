import { Role } from './Role'
import { Input } from './Input'
import { RadioGroup } from './RadioGroup'
import { Checked } from './aria/Checked'

/**
 * @summary A checkable input in a group of elements with the same role,
 *  only one of which can be checked at a time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radio
 */
export class Radio extends Input {
    /**
     * @param {boolean} checked
     */
    set checked(checked) {
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean}
     */
    get checked() {
        return this.getAttr(Checked) || false
    }

    /**
     * @returns {RadioGroup|*|null}
     */
    get group() {
        return this.closest(RadioGroup)
    }

    /**
     * @returns {Radio}
     */
    get nextRadio() {
        const radios = this.group.radios
        const index = radios.indexOf(this) + 1
        return radios[index === radios.length? 0 : index]
    }

    /**
     * @returns {Radio}
     */
    get prevRadio() {
        const radios = this.group.radios
        const index = radios.indexOf(this) - 1
        return radios[index < 0? radios.length - 1 : index]
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIARadio = Role.Radio = Radio
