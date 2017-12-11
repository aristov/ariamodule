import { Input as HTMLInput, Label, Span } from 'htmlmodule'
import { Input } from './input'
import { Multiline } from './aria'

export class Textbox extends Input {
    /**
     * @param {*} init
     */
    init(init) {
        this.children = this.createInput()
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
     * @returns {HTMLInput|null|*}
     */
    get input() {
        return this.find(this.constructor.inputAssembler)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const instance = this.labelledBy[0]
        if(instance) {
            instance.textContent = label
        }
        else {
            const instance = new Label({
                htmlFor : this.input.id = this.id + '-input',
                children : label
            })
            this.labelledBy = [instance]
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
     * @param {(Label)[]} labelledBy
     */
    set labelledBy(labelledBy) {
        const nodeList = labelledBy.map(({ node }) => node)
        this.ownerElement.node.prepend(...nodeList)
    }

    /**
     * @returns {(Label)[]}
     */
    get labelledBy() {
        return this.findAll(Label)
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
     * @returns {Function} Span
     */
    static get elementAssembler() {
        return Span
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
export function textbox(...init) {
    return new Textbox(...init)
}
