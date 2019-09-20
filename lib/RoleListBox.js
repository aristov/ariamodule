import { ARIAMultiSelectable } from './ARIAMultiSelectable'
import { ARIAReadOnly } from './ARIAReadOnly'
import { ARIARequired } from './ARIARequired'
import { Role } from './Role'
import { RoleOption } from './RoleOption'
import { RoleSelect } from './RoleSelect'

/**
 * A widget that allows the user to select one or more items from a list of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listbox
 */
export class RoleListBox extends RoleSelect {
    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(ARIAMultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(ARIAMultiSelectable)
    }

    /**
     * @param {RoleOption[]} options
     */
    set options(options) {
        this.children = options
    }

    /**
     * @returns {RoleOption[]}
     */
    get options() {
        return this.findAll(RoleOption)
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        super.orientation = orientation
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return super.orientation || 'vertical'
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
     * @returns {RoleOption[]}
     */
    get selectedOptions() {
        return this.findAll(RoleOption, ({ selected }) => selected)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleListBox as ListBox }

Role.ListBox = RoleListBox
