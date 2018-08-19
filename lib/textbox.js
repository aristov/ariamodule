import { Input as HTMLInput } from 'htmlmodule/lib/input'
import { Label } from 'htmlmodule/lib/label'
import { Input } from './input'
import { ActiveDescendant } from './aria/activedescendant'
import { Multiline } from './aria/multiline'

/**
 * @summary A type of input that allows free-form text as its value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#textbox
 */
export class Textbox extends Input {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._input = new this.constructor.inputAssembler({
            parentNode : this,
            className : 'input',
            onblur : this.onBlur.bind(this),
            onfocus : this.onFocus.bind(this)
        })
        super.init(init)
    }

    /**
     * Focus the input
     */
    focus() {
        this.input.focus()
    }

    /**
     * @param {FocusEvent} event
     */
    onBlur(event) {
        this.classList.remove('focus')
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        this.classList.add('focus')
    }

    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.classList.toggle('disabled', this.input.disabled = disabled)
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return this.input.disabled
    }

    /**
     * @param {*} input
     */
    set input(input) {
        this.input.init(input)
    }

    /**
     * @returns {HTMLInput|*}
     */
    get input() {
        return this._input
    }

    /**
     * @param {string} label
     */
    set label(label) {
        const input = this.input
        this.labelledBy = new Label({
            nextSibling : input,
            control : input,
            textContent : label
        })
    }

    /**
     * @returns {string}
     */
    get label() {
        const label = this.labelledBy[0]
        return label? label.textContent : ''
    }

    /**
     * @param {boolean} multiline
     */
    set multiline(multiline) {
        this.setAttribute(Multiline, multiline)
    }

    /**
     * @returns {boolean}
     */
    get multiline() {
        return this.getAttribute(Multiline)
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @return {string} 
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {string} placeholder
     */
    set placeholder(placeholder) {
        this.input.placeholder = placeholder
    }

    /**
     * @returns {string}
     */
    get placeholder() {
        return this.input.placeholder
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.classList.toggle('readonly', this.input.readOnly = readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.input.readOnly
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.classList.toggle('required', this.input.required = required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.input.required
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this.input.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.input.value
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {class} Input
     */
    static get inputAssembler() {
        return HTMLInput
    }
}

/**
 * @param {*} [init]
 * @returns {Textbox}
 */
export function textbox(init) {
    return new Textbox(init)
}
