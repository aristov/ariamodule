import { Form } from 'htmlmodule/lib/form'
import { Input } from './input'
import { RadioGroup } from './radiogroup'
import { Checked } from './aria/checked'

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
        else if(!this.checked) {
            this.checked = true
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) {
            event.preventDefault()
            this.onArrowKeyDown(event)
        }
        if(key === ' ') {
            event.preventDefault()
            if(!event.repeat) {
                this.classList.add('active')
            }
        }
        if(key === 'Enter') {
            const form = this.form
            form && form.submit()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        let radio = this
        do {
            radio = 'ArrowLeft ArrowUp'.includes(event.key)?
                radio.prevRadio :
                radio.nextRadio
        }
        while(radio.disabled)
        if(radio !== this) {
            radio.checked = true
            radio.focus()
            radio.emit('change', { bubbles : true })
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
     * @param {boolean} checked
     */
    set checked(checked) {
        const group = this.group
        this.setAttribute(Checked, checked)
        if(group) {
            if(checked) {
                group.checkedRadio = this
            }
            else if(!group.checkedRadio) {
                group.resetTabIndex()
            }
        }
        if(this.disabled) {
            if(checked && group) {
                group.resetTabIndex()
            }
        }
        else this.tabIndex = checked? 0 : -1
    }

    /**
     * @returns {boolean}
     */
    get checked() {
        return this.getAttribute(Checked) || false
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
        if(disabled && this.checked) {
            const group = this.group
            if(group) {
                group.resetTabIndex()
            }
        }
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        const group = this.group
        return group && group.disabled || super.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(Form)
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
    get nextRadio() {
        const radios = this.group.radios
        const index = radios.indexOf(this) + 1
        return radios[index === radios.length? 0 : index]
    }

    /**
     * @returns {Radio}
     */
    get prevRadio() {
        const radios = this.group.radios
        const index = radios.indexOf(this) - 1
        return radios[index < 0? radios.length - 1 : index]
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this.dataset.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.dataset.value || ''
    }

    /**
     * @returns {boolean}
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
