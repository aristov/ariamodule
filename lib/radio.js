import { Form } from 'htmlmodule/lib/form'
import { Label } from 'htmlmodule/lib/label'
import { Input } from './input'
import { RadioGroup } from './radiogroup'
import { Checked } from './aria/checked'

const LEFT_UP = ['ArrowLeft', 'ArrowUp']

/**
 * @summary A checkable input in a group of elements with the same role,
 *  only one of which can be checked at a time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radio
 */
export class Radio extends Input {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
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
            this.ownerElement.click()
        }
    }

    /**
     * Submit the owner form
     */
    submitForm() {
        const form = this.closest(Form)
        if(form) {
            form.emit('submit', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        if(!this.disabled) {
            this.tabIndex = checked === 'true'? 0 : -1
        }
        this.setAttribute(Checked, checked)
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(Checked) || 'false'
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
     * @param {String} label
     */
    set label(label) {
        this.append(this.labelledBy = new Label(label))
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
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
        return this.dataset.value || ''
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
export function radio(init) {
    return new Radio(init)
}
