import { Input as HTMLInput, Label } from 'htmlmodule'
import { Input } from './input'
import { Checked, ReadOnly } from './aria'

/**
 * @summary A checkable input that has three possible values: true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#checkbox
 */
export class Checkbox extends Input {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._input = null
        super.init(init)
        if(!this.disabled) this.tabIndex = 0
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mouseup', this.onMouseUp.bind(this))
        this.on('blur', () => this.active = false)
        this.on('mouseleave', () => this.active = false)
    }

    /**
     * Activate the checkbox
     */
    activate() {
        if(!this.readOnly) {
            this.checked = String(this.checked === 'false')
            this.emit('change', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) event.stopImmediatePropagation()
        else this.activate()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key === ' ') {
            event.preventDefault()
            if(!event.repeat) this.active = true
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.emit('click', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.disabled) this.active = true
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        if(!this.disabled) this.active = false
    }

    /**
     * @param {Boolean} active
     */
    set active(active) {
        this.classList.toggle('active', active)
    }

    /**
     * @returns {Boolean}
     */
    get active() {
        return this.classList.contains('active')
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        if(checked === 'true') {
            this.input.parentNode = this
        }
        else this.input.remove()
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
        super.disabled = this.input.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {*} input
     */
    set input(input) {
        this.input.init(input)
    }

    /**
     * @returns {HTMLInput}
     */
    get input() {
        let input = this._input
        if(!input) {
            input = this._input = new HTMLInput({
                type : 'hidden',
                value : 'on'
            })
            if(this.checked === 'true') {
                input.parentNode = this
            }
        }
        return input
    }

    /**
     * @param {String} label
     */
    set label(label) {
        super.children = [
            this.labelledBy = new Label({
                id : this.id + '-label',
                children : label
            })
        ]
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @retrurns {String} 
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.value = value
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
}

/**
 * @param {*} [init]
 * @returns {Checkbox}
 */
export function checkbox(...init) {
    return new Checkbox(...init)
}
