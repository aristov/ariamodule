import { Role } from './Role'
import { Input } from './Input'
import { AutoComplete } from './aria/AutoComplete'
import { Required } from './aria/Required'
import { ActiveDescendant } from './aria/ActiveDescendant'
import { MultiLine } from './aria/MultiLine'
import { Placeholder } from './aria/Placeholder'
import { ReadOnly } from './aria/ReadOnly'

/**
 * @summary A type of input that allows free-form text as its value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#textbox
 */
export class TextBox extends Input {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {Role|ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttr(ActiveDescendant)
    }

    /**
     * @param {string} autoComplete
     */
    set autoComplete(autoComplete) {
        this.setAttr(AutoComplete, autoComplete)
    }

    /**
     * @returns {string}
     */
    get autoComplete() {
        return this.getAttr(AutoComplete)
    }

    /**
     * @param {boolean} multiLine
     */
    set multiLine(multiLine) {
        this.setAttr(MultiLine, multiLine)
    }

    /**
     * @returns {boolean}
     */
    get multiLine() {
        return this.getAttr(MultiLine)
    }

    /**
     * @param {string} placeholder
     */
    set placeholder(placeholder) {
        this.setAttr(Placeholder, placeholder)
    }

    /**
     * @returns {string}
     */
    get placeholder() {
        return this.getAttr(Placeholder)
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

export const ARIATextBox = Role.TextBox = TextBox
