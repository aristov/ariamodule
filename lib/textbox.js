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
        this.children = this._input = this.createInput()
        super.init(init)
    }

    /**
     * Creat the HTML input
     */
    createInput() {
        const { inputAssembler } = this.constructor
        return new inputAssembler({
            className : 'input',
            onblur : this.onInputBlur.bind(this),
            onfocus : this.onInputFocus.bind(this)
        })
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
    onInputBlur(event) {
        this.classList.remove('focus')
    }

    /**
     * @param {FocusEvent} event
     */
    onInputFocus(event) {
        this.classList.add('focus')
    }

    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.input.disabled = disabled
        this.classList.toggle('disabled', disabled)
    }

    /**
     * @returns {Boolean}
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
     * @param {String} label
     */
    set label(label) {
        const labelledBy = this.labelledBy[0]
        if(labelledBy) {
            labelledBy.textContent = label
        }
        else {
            const input = this.input
            this.prepend(this.labelledBy = new Label({
                htmlFor : input.id = Label.generateId(input),
                children : label
            }))
        }
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {Boolean} multiline
     */
    set multiline(multiline) {
        this.setAttribute(Multiline, multiline)
    }

    /**
     * @returns {Boolean}
     */
    get multiline() {
        return this.getAttribute(Multiline)
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @return {String} 
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.input.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.input.placeholder
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.classList.toggle('readonly', this.input.readOnly = readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.input.readOnly
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.input.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.input.required
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.value = value
        // this.input.defaultValue = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function} Input
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
