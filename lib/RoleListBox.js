import { RoleOption } from './RoleOption'
import { Role } from './Role'
import { RoleSelect } from './RoleSelect'
import { MultiSelectable } from './aria/MultiSelectable'
import { ReadOnly } from './aria/ReadOnly'
import { Required } from './aria/Required'

/**
 * @summary A widget that allows the user to select one or more items from a list of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listbox
 */
export class RoleListBox extends RoleSelect {
    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(MultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(MultiSelectable)
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

export { RoleListBox as ListBox, RoleListBox as ARIAListBox }

Role.ListBox = RoleListBox
