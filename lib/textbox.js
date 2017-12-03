import { Input as HTMLInput, Label } from 'htmlmodule'
import { Input } from './input'

export class Textbox extends Input {
    init(init) {
        this.children = new HTMLInput({
            className : 'box',
            onblur : this.onInputBlur.bind(this),
            onfocus : this.onInputFocus.bind(this),
        })
        super.init(init)
    }

    onInputBlur(event) {
        this.classList.remove('focus')
    }

    onInputFocus(event) {
        this.classList.add('focus')
    }

    set disabled(disabled) {
        this.input.disabled = disabled
        this.classList.toggle('disabled', disabled)
    }

    get disabled() {
        return this.input.disabled
    }

    get input() {
        return this.find(HTMLInput)
    }

    set placeholder(placeholder) {
        this.input.placeholder = placeholder
    }

    get placeholder() {
        return this.input.placeholder
    }

    set value(value) {
        const input = this.input
        input.defaultValue = input.value = value
    }

    get value() {
        return this.input.value
    }

    static get abstract() {
        return false
    }

    static get elementAssembler() {
        return Label
    }
}

export function textbox(...init) {
    return new Textbox(...init)
}
