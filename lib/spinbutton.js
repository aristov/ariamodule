import { ElementAssembler } from 'dommodule/lib/element'
import { Span } from 'htmlmodule/lib/span'
import { ReadOnly } from './aria/readonly'
import { Required } from './aria/required'
import { ARIARange } from './range'
import { Button } from './button'

/**
 * @summary A form of range that expects the user to select from among discrete choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 */
export class SpinButton extends ARIARange {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this.children = new Span({
            className : 'box',
            children : [
                this._decrementButton = new Button({
                    tabIndex : null,
                    innerHTML : '&minus;'
                }),
                this._text = new Span({ className : 'text' }),
                this._incrementButton = new Button({
                    tabIndex : null,
                    innerHTML : '&plus;'
                })
            ]
        })
        this.tabIndex = 0
    }

    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('click', this.onClick)
        this.on('keydown', this.onKeyDown)
        super.init(init)
    }

    decrement() {
        this.valueNow = Math.max(Math.min(this.valueNow - 1, this.valueMax), this.valueMin)
    }

    increment() {
        this.valueNow = Math.max(Math.min(this.valueNow + 1, this.valueMax), this.valueMin)
    }

    onClick(event) {
        if(this.readOnly) return
        const button = this.getRoleOf(event.target)
        if(button === this._decrementButton) {
            this.decrement()
        }
        else if(button === this._incrementButton) {
            this.increment()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(this.readOnly) return
        const key = event.key
        if(/\d/.test(key)) {
            event.preventDefault()
            this.valueNow = (this.valueNow + key).replace(/^0+/, '')
        }
        else if(key === 'Backspace') {
            this.onBackspaceKeyDown(event)
        }
        else if(key === 'ArrowUp') {
            event.preventDefault()
            this.increment()
        }
        else if(key === 'ArrowDown') {
            event.preventDefault()
            this.decrement()
        }
        else if(key === '-') {
            event.preventDefault()
            if(this.valueMin < 0 && this.valueMax > 0) {
                this.valueNow = -this.valueNow
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onBackspaceKeyDown(event) {
        event.preventDefault()
        const value = String(this.valueNow)
        const indexEnd = value.length - 1
        this.valueNow = indexEnd?
            Number(value.substring(0, indexEnd)) :
            null
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this._text.contentEditable = !disabled
        this.findAll(Button).forEach(button => {
            button.disabled = disabled
        })
        super.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {*} label {string|ElementAssembler|*}
     */
    set label(label) {
        if(label instanceof ElementAssembler) {
            this.prepend(this.labelledBy = label)
        }
        else super.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return super.label || this.labelledBy.map(({ textContent }) => textContent).join()
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
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        const value = super.valueNow = valueNow
        this._text.textContent = String(value).replace(/-/, '−')
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

/**
 * @param {*} [init]
 * @returns {SpinButton}
 */
export function spinButton(init) {
    return new SpinButton(init)
}
