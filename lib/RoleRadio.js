import { ARIAChecked } from './ARIAChecked'
import { Role } from './Role'
import { RoleInput } from './RoleInput'
import { RoleRadioGroup } from './RoleRadioGroup'

/**
 * A checkable input in a group of elements with the same role,
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
     * @returns {RoleRadio|null}
     */
    get nextRadio() {
        const radios = this.group.radios
        return radios[radios.indexOf(this) + 1] || null
    }

    /**
     * @returns {RoleRadio|null}
     */
    get previousRadio() {
        const radios = this.group.radios
        return radios[radios.indexOf(this) - 1] || null
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleRadio as Radio }

Role.Radio = RoleRadio
