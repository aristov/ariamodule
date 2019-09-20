import { ARIAAutoComplete } from './ARIAAutoComplete'
import { ARIAReadOnly } from './ARIAReadOnly'
import { ARIARequired } from './ARIARequired'
import { Role } from './Role'
import { RoleSelect } from './RoleSelect'
import { RoleTextBox } from './RoleTextBox'

/**
 * A composite widget containing a single-line textbox and another element,
 *  such as a listbox or grid, that can dynamically pop up to help the user
 *  set the value of the textbox.
 * @see https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
export class RoleComboBox extends RoleSelect {
    /**
     * @param {string} autoComplete
     */
    set autoComplete(autoComplete) {
        this.setAttr(ARIAAutoComplete, autoComplete)
    }

    /**
     * @returns {string}
     */
    get autoComplete() {
        return this.getAttr(ARIAAutoComplete)
    }

    /**
     * @param {boolean} expanded
     */
    set expanded(expanded) {
        super.expanded = expanded
    }

    /**
     * @returns {boolean}
     */
    get expanded() {
        return super.expanded || false
    }

    /**
     * @param {string} hasPopup
     */
    set hasPopup(hasPopup) {
        super.hasPopup = hasPopup
    }

    /**
     * @returns {string}
     */
    get hasPopup() {
        return super.hasPopup || 'listbox'
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
     * @returns {RoleTextBox|*}
     */
    get textBox() {
        return this.find(RoleTextBox)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleComboBox as ComboBox }

Role.ComboBox = RoleComboBox
