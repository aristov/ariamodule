import { Form, Span } from 'htmlmodule'
import { Input } from './input'
import { RadioGroup } from './radiogroup'
import { Checked } from './aria'

const LEFT_UP = ['ArrowLeft', 'ArrowUp']

export class Radio extends Input {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        super.init(init)
        if(!this.disabled) {
            this.tabIndex = this.checked? 0 : -1
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) event.stopImmediatePropagation()
        else this.checked = 'true'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(event.key.startsWith('Arrow')) {
            event.preventDefault()
            this.onArrowKeyDown(event)
        }
        if(key === ' ') {
            event.preventDefault()
            if(!event.repeat) this.classList.add('active')
        }
        if(key === 'Enter') this.submitForm()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        let radio = this
        do {
            radio = LEFT_UP.includes(event.key)?
                radio.prev :
                radio.next
        }
        while(radio.disabled)
        if(radio !== this) {
            radio.checked = 'true'
            radio.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.emit('click', {
                bubbles : true,
                cancelable : true
            })
        }
    }

    /**
     * Submit the owner form
     */
    submitForm() {
        const form = this.closest(Form)
        if(form) {
            form.emit('submit', {
                bubbles : true,
                cancelable : true
            })
        }
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        const group = this.group
        if(group && checked === 'true') {
            group.radios.forEach(radio => radio.checked = 'false')
        }
        this.setAttribute(Checked, checked)
        if(this.group && !this.disabled) {
            this.tabIndex = checked === 'true'? 0 : -1
        }
        if(group) group.value = this.value
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(Checked)
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = [new Span({ className : 'box' }), children]
    }

    /**
     * @returns {Array}
     */
    get children() {
        return super.children
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        const group = this.group
        return group && group.disabled || super.disabled
    }

    /**
     * @returns {RadioGroup|*|null}
     */
    get group() {
        return this.closest(RadioGroup)
    }

    /**
     * @returns {Radio}
     */
    get next() {
        const radios = this.group.radios
        let index = radios.indexOf(this) + 1
        if(index === radios.length) index = 0
        return radios[index]
    }

    /**
     * @returns {Radio}
     */
    get prev() {
        const radios = this.group.radios
        let index = radios.indexOf(this) - 1
        if(index < 0) index = radios.length - 1
        return radios[index]
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.dataset.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.dataset.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Radio}
 */
export function radio(...init) {
    return new Radio(...init)
}
