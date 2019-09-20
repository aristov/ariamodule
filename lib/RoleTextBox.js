import { ARIAActiveDescendant } from './ARIAActiveDescendant'
import { ARIAAutoComplete } from './ARIAAutoComplete'
import { ARIAMultiLine } from './ARIAMultiLine'
import { ARIAPlaceholder } from './ARIAPlaceholder'
import { ARIAReadOnly } from './ARIAReadOnly'
import { ARIARequired } from './ARIARequired'
import { Role } from './Role'
import { RoleInput } from './RoleInput'

/**
 * A type of input that allows free-form text as its value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#textbox
 */
export class RoleTextBox extends RoleInput {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ARIAActiveDescendant, activeDescendant)
    }

    /**
     * @returns {Role|ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttr(ARIAActiveDescendant)
    }

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
     * @param {boolean} multiLine
     */
    set multiLine(multiLine) {
        this.setAttr(ARIAMultiLine, multiLine)
    }

    /**
     * @returns {boolean}
     */
    get multiLine() {
        return this.getAttr(ARIAMultiLine)
    }

    /**
     * @param {string} placeholder
     */
    set placeholder(placeholder) {
        this.setAttr(ARIAPlaceholder, placeholder)
    }

    /**
     * @returns {string}
     */
    get placeholder() {
        return this.getAttr(ARIAPlaceholder)
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

export { RoleTextBox as TextBox }

Role.TextBox = RoleTextBox
