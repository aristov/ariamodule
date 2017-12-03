import { Input as HTMLInput, Label, Span, TextArea } from 'htmlmodule'
import { Input } from './input'

export class Textbox extends Input {
    /**
     * @param {*} init
     */
    init(init) {
        const multiline = Boolean(init)
            && init.constructor === Object
            && init.hasOwnProperty('multiline')
            && init.multiline
        this.children = this.createInput(multiline)
        super.init(init)
    }

    /**
     * @param {Boolean} multiline
     */
    createInput(multiline) {
        const assembler = multiline? TextArea : HTMLInput
        return new assembler({
            className : 'input',
            onblur : this.onInputBlur.bind(this),
            onfocus : this.onInputFocus.bind(this),
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
        this.input.node.disabled = disabled
        this.classList.toggle('disabled', disabled)
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.input.node.disabled
    }

    /**
     * @returns {HTMLInput|TextArea|null}
     */
    get input() {
        return this.find(HTMLInput, ',' + TextArea.localName)
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
    set multiline(multiline) {}

    /**
     * @returns {Boolean}
     */
    get multiline() {
        return this.input instanceof TextArea
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.input.node.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.input.node.placeholder
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.node.value = value
        // this.input.defaultValue = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.node.value
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
