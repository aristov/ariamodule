import { Input } from 'htmlmodule/lib/Input'
import { Span } from 'htmlmodule/lib/Span'
import { Button } from './Button'
import { Range } from './Range'
import { Role } from './Role'
import { Disabled } from './aria/Disabled'
import { ReadOnly } from './aria/ReadOnly'
import { Required } from './aria/Required'

const DEFAULT_STEP = 1
const MINUS_CHARACTER = '−'

/**
 * @summary A form of range that expects the user to select from among discrete choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 */
export class SpinButton extends Range {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._step = null
        this._valueNow = null
        this.tabIndex = 0
        this.children = [
            new Span({
                className : 'box',
                children : [
                    this._decrButton = new Button({
                        tabIndex : null,
                        dataset : { sign : '-' },
                        innerHTML : '&minus;'
                    }),
                    this._edit = new Span({ className : 'edit' }),
                    this._incrButton = new Button({
                        tabIndex : null,
                        dataset : { sign : '+' },
                        innerHTML : '&plus;'
                    })
                ]
            }),
            this._input = new Input({ type : 'hidden' })
        ]
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('click', this.onClick)
        this.on('blur', this.onBlur)
        this.on('focus', this.onFocus)
        this.on('keydown', this.onKeyDown)
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.readOnly) return
        const button = this.getInstanceOf(event.target).closest(Button)
        if(button) {
            this.changeValue(this.valueNow + Number(button.dataset.sign + this.step))
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onBlur(event) {
        if(this.valueNow !== this._valueNow) {
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        this._valueNow = this.valueNow
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(this.readOnly) return
        const key = event.key
        switch(key) {
            case '-': this.onHyphenKeyDown(event); break
            case '.': this.onDotKeyDown(event); break
            case 'Backspace': this.onBackspaceKeyDown(event); break
            case 'ArrowUp': this.onArrowUpKeyDown(event); break
            case 'ArrowDown': this.onArrowDownKeyDown(event); break
            case 'Home': this.onHomeKeyDown(event); break
            case 'End': this.onEndKeyDown(event); break
            default: /\d/.test(key) && this.onDigitKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onHomeKeyDown(event) {
        event.preventDefault()
        const valueMin = this.valueMin
        if(valueMin > -Infinity) {
            this.changeValue(valueMin)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEndKeyDown(event) {
        event.preventDefault()
        const valueMax = this.valueMax
        if(valueMax < Infinity) {
            this.changeValue(valueMax)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowUpKeyDown(event) {
        event.preventDefault()
        this.changeValue(this.valueNow + this.step)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        event.preventDefault()
        this.changeValue(this.valueNow - this.step)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onDigitKeyDown(event) {
        this.valueNow = Number(this._edit.textContent.replace(MINUS_CHARACTER, '-') + event.key)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onDotKeyDown(event) {
        if(/\./.test(this.step.toString()) && !/\./.test(this._edit.textContent)) {
            this._edit.textContent += '.'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onHyphenKeyDown(event) {
        const valueNow = this.valueNow
        if(!valueNow) {
            this._edit.textContent = MINUS_CHARACTER
        }
        else if(this.valueMin < 0 && this.valueMax > 0) {
            this.valueNow = this._valueNow = -valueNow
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onBackspaceKeyDown(event) {
        event.preventDefault()
        const valueNow = this.valueNow
        const value = String(valueNow)
        if(valueNow > -10 && valueNow < 0) {
            this.valueNow = null
            this._edit.textContent = MINUS_CHARACTER
        }
        else {
            this.valueNow = Math.abs(valueNow) >= 10?
                Number(value.substring(0, value.length - 1)) :
                null
        }
    }

    /**
     * @param {number} value
     */
    changeValue(value) {
        const valueNow = Math.min(Math.max(this.valueMin, value), this.valueMax)
        if(valueNow !== this._valueNow) {
            this.valueNow = this._valueNow = valueNow
            this.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
        this._decrButton.setAttr(Disabled, disabled)
        this._incrButton.setAttr(Disabled, disabled)
        this._input.parentNode = disabled? null : this
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
     * @returns {string}
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
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(Required, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(Required)
    }

    /**
     * @param {number} step
     */
    set step(step) {
        this._step = Math.abs(step)
    }

    /**
     * @returns {number}
     */
    get step() {
        return this._step || DEFAULT_STEP
    }

    /**
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        if(valueNow !== null) {
            const value = super.valueNow = this._input.value = +valueNow.toFixed(10)
            this._edit.textContent = String(value).replace(/-/, MINUS_CHARACTER)
        }
        else super.valueNow = this._edit.textContent = this._input.value = null
        this._decrButton.setAttr(Disabled, valueNow !== null && valueNow <= this.valueMin)
        this._incrButton.setAttr(Disabled, valueNow !== null && valueNow >= this.valueMax)
    }

    /**
     * @returns {number}
     */
    get valueNow() {
        return super.valueNow || 0
    }

    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    /**
     * @returns {number}
     */
    get valueMin() {
        const valueMin = super.valueMin
        return valueMin === null? -Infinity : valueMin
    }

    /**
     * @param {number} valueMax
     */
    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

    /**
     * @returns {number}
     */
    get valueMax() {
        const valueMax = super.valueMax
        return valueMax === null? Infinity : valueMax
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.SpinButton = SpinButton
