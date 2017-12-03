import { Input as HTMLInput, Label, Span } from 'htmlmodule'
import { Input } from './input'

export class Textbox extends Input {
    /**
     * @param {*} init
     */
    init(init) {
        this.children = new HTMLInput({
            className : 'box',
            onblur : this.onInputBlur.bind(this),
            onfocus : this.onInputFocus.bind(this),
        })
        super.init(init)
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
     * @returns {HTMLInput|null}
     */
    get input() {
        return this.find(HTMLInput)
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
     * @param {String} value
     */
    set value(value) {
        const input = this.input
        input.defaultValue = input.value = value
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
     * @returns {Function}
     */
    static get elementAssembler() {
        return Span
    }
}

/**
 * @param {*} [init]
 * @returns {Textbox}
 */
export function textbox(...init) {
    return new Textbox(...init)
}
