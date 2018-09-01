import { ElementAssembler } from 'dommodule/lib/element'
import { Span } from 'htmlmodule/lib/span'
import { ReadOnly } from './aria/readonly'
import { Required } from './aria/required'
import { ARIARange } from './range'
import { Button } from './button'

const DEFAULT_STEP = 1

/**
 * @summary A form of range that expects the user to select from among discrete choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 * todo emit change
 * todo HTML input
 * todo Home / End / PageUp / PageDown
 */
export class SpinButton extends ARIARange {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this._step = this.constructor.defaultStep
        this.children = new Span({
            className : 'box',
            children : [
                new Button({
                    tabIndex : null,
                    onclick : event => this.readOnly || (this.value = this.valueNow - this.step),
                    innerHTML : '&minus;'
                }),
                this._text = new Span({ className : 'text' }),
                new Button({
                    tabIndex : null,
                    onclick : event => this.readOnly || (this.value = this.valueNow + this.step),
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
        this.on('keydown', this.onKeyDown)
        super.init(init)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(this.readOnly) return
        const key = event.key
        if(/\d/.test(key)) {
            event.preventDefault()
            this.valueNow = Number((this.valueNow + key).replace(/^0+/, ''))
        }
        else if(key === 'Backspace') {
            this.onBackspaceKeyDown(event)
        }
        else if(key === 'ArrowUp') {
            event.preventDefault()
            this.value = this.valueNow + this.step
        }
        else if(key === 'ArrowDown') {
            event.preventDefault()
            this.value = this.valueNow - this.step
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
        const valueNow = this.valueNow
        const value = String(valueNow)
        this.valueNow = Math.abs(valueNow) >= 10?
            Number(value.substring(0, value.length - 1)) :
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
     * @param {number} step
     */
    set step(step) {
        this._step = step
    }

    /**
     * @returns {number}
     */
    get step() {
        return this._step
    }

    /**
     * @param {number} value
     */
    set value(value) {
        this.valueNow = Math.max(Math.min(value, this.valueMax), this.valueMin)
    }

    /**
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        if(valueNow !== null) {
            const value = super.valueNow = Number(valueNow.toFixed(15))
            this._text.textContent = String(value).replace(/-/, '−')
        }
        else this._text.textContent = super.valueNow = null
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

    /**
     * @returns {number}
     */
    static get defaultStep() {
        return DEFAULT_STEP
    }
}

/**
 * @param {*} [init]
 * @returns {SpinButton}
 */
export function spinButton(init) {
    return new SpinButton(init)
}
