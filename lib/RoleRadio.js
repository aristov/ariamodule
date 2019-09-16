import { Role } from './Role'
import { RoleInput } from './RoleInput'
import { RoleRadioGroup } from './RoleRadioGroup'
import { ARIAChecked } from './ARIAChecked'

/**
 * @summary A checkable input in a group of elements with the same role,
 *  only one of which can be checked at a time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radio
 */
export class RoleRadio extends RoleInput {
    /**
     * @param {boolean} checked
     */
    set checked(checked) {
        this.setAttr(ARIAChecked, checked)
    }

    /**
     * @returns {boolean}
     */
    get checked() {
        return this.getAttr(ARIAChecked) || false
    }

    /**
     * @returns {RoleRadioGroup|*|null}
     */
    get group() {
        return this.closest(RoleRadioGroup)
    }

    /**
     * @returns {RoleRadio}
     */
    get nextRadio() {
        const radios = this.group.radios
        const index = radios.indexOf(this) + 1
        return radios[index === radios.length? 0 : index]
    }

    /**
     * @returns {RoleRadio}
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

export { RoleRadio as Radio, RoleRadio as ARIARadio }

Role.Radio = RoleRadio
