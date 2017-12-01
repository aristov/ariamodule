import { Span } from 'htmlmodule'
import { Input } from './input'
import { Checked, ReadOnly } from './aria'

export class Checkbox extends Input {
    init(init) {
        this.tabIndex = 0
        this.checked = 'false'
        // this.input = this.getInput()

        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        super.init(init)
    }

    set children(children) {
        super.children = [
            new Span({ className : 'box' }),
            children
        ]
    }

    get children() {
        return super.children
    }

    /*getInput() {
        const node = this.node
        let input = node.querySelector('input')
        if(!input) {
            const { name, value } = node.dataset
            input = new HTMLInput({
                name, value,
                type : 'hidden',
                disabled : this.disabled
            })
            if(this.checked === 'true') {
                node.appendChild(input)
            }
        }
        return input
    }*/
    
    onKeyDown(event) {
        if(event.key === ' ' && !event.repeat) {
            event.preventDefault()
            this.classList.add('active')
        }
    }

    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.emit('click', { bubbles : true, cancelable : true })
        }
    }

    onClick(event) {
        if(this.disabled) event.stopImmediatePropagation()
        else {
            this.checked = String(this.checked === 'false')
            this.emit('change', { bubbles : true, cancelable : true })
        }
    }

    /*get checked() {
        return this.node.getAttribute('aria-checked') || 'false'
    }

    set checked(checked) {
        const { node, input } = this
        node.setAttribute('aria-checked', checked)
        if(checked === 'true') node.appendChild(input)
        else node.removeChild(input)
    }*/

    /*get value() {
        return this.dataset.value
    }

    set value(value) {
        this.dataset.value = value
    }*/

    static get abstract() {
        return false
    }
}

Checkbox.defineAttributes([Checked, ReadOnly])

export function checkbox(...init) {
    return new Checkbox(...init)
}
