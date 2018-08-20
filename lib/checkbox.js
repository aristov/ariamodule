import { Input as HTMLInput } from 'htmlmodule/lib/input'
import { Input } from './input'
import { Checked } from './aria/checked'
import { ReadOnly } from './aria/readonly'

/**
 * @summary A checkable input that has three possible values: true, false, or mixed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#checkbox
 */
export class CheckBox extends Input {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mouseup', this.onMouseUp.bind(this))
        this.on('blur', () => this.active = false)
        this.on('mouseleave', () => this.active = false)
        this._input = new HTMLInput({
            type : 'hidden',
            value : 'on'
        })
        this.tabIndex = 0
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else if(!event.defaultPrevented && !this.readOnly) {
            this.checked = !this.checked
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key === ' ') {
            event.preventDefault()
            if(!event.repeat) {
                this.active = true
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.active = false
            this.click()
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.disabled) {
            this.active = true
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        if(!this.disabled) {
            this.active = false
        }
    }

    /**
     * @param {boolean} active
     */
    set active(active) {
        this.classList.toggle('active', active)
    }

    /**
     * @returns {boolean}
     */
    get active() {
        return this.classList.contains('active')
    }

    /**
     * @param {boolean|string} checked
     */
    set checked(checked) {
        if(checked === true) {
            this._input.parentNode = this
        }
        else this._input.remove()
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean|string}
     */
    get checked() {
        return this.getAttr(Checked) || false
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = [children, this.find(HTMLInput)]
    }

    /**
     * @returns {array.ElementAssembler|*}
     */
    get children() {
        return super.children
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = this._input.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._input.name = name
    }

    /**
     * @retrurns {string}
     */
    get name() {
        return this._input.name
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this._input.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this._input.value
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
 * @returns {CheckBox}
 */
export function checkbox(init) {
    return new CheckBox(init)
}
