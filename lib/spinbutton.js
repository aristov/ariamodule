import { ElementAssembler } from 'dommodule/lib/element'
import { Span } from 'htmlmodule/lib/span'
import { ARIARange } from './range'
import { Button } from './button'
import { Role } from './role'

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
                this._text = new Span({
                    className : 'text',
                    contentEditable : true,
                    onblur : event => this.onBlur(event),
                    onfocus : event => this.onFocus(event),
                    oninput : event => this.onInput(event),
                    onpaste : event => this.onPaste(event),
                }),
                this._incrementButton = new Button({
                    tabIndex : null,
                    innerHTML : '&plus;'
                })
            ]
        })
    }

    init(init) {
        this.on('click', this.onClick)
        this.on('keydown', this.onKeyDown)
        super.init(init)
    }

    focus() {
        this._text.focus()
    }

    decrement() {
        this.valueNow = Math.max(Math.min(this.valueNow - 1, this.valueMax), this.valueMin)
    }

    increment() {
        this.valueNow = Math.max(Math.min(this.valueNow + 1, this.valueMax), this.valueMin)
    }

    onClick(event) {
        const button = this.getRoleOf(event.target)
        if(button === this._decrementButton) {
            this.decrement()
            this.focus()
        }
        else if(button === this._incrementButton) {
            this.increment()
            this.focus()
        }
    }

    onBlur(event) {
        this.classList.remove('focus')
    }

    onFocus(event) {
        this.classList.add('focus')
    }

    onInput(event) {
        const value = parseInt(this._text.textContent, 10)
        super.valueNow = isNaN(value)? null : value
    }

    onKeyDown(event) {
        const key = event.key
        if(!/(?:\d|Tab|Backspace|Delete|\-)/.test(key)
            && !key.startsWith('Arrow')
            && !event.metaKey
            && !event.ctrlKey) {
            event.preventDefault()
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
            if(this.valueMin < 0) {
                this.valueNow = -this.valueNow
            }
        }
    }

    onPaste(event) {
        event.preventDefault()
    }

    set disabled(disabled) {
        this._text.contentEditable = !disabled
        this._incrementButton.disabled = disabled
        this._decrementButton.disabled = disabled
        super.disabled = disabled
    }

    get disabled() {
        return super.disabled
    }

    /**
     * @param {*} label {string|ElementAssembler|Role|*}
     */
    set label(label) {
        if(label instanceof ElementAssembler || label instanceof Role) {
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

    set valueNow(valueNow) {
        this._text.textContent = super.valueNow = valueNow
    }

    get valueNow() {
        return super.valueNow || 0
    }

    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    get valueMin() {
        const valueMin = super.valueMin
        return valueMin === null? -Infinity : valueMin
    }

    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

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
