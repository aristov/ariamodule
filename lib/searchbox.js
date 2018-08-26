import { Button } from './button'
import { TextBox } from './textbox'

/**
 * @summary A type of textbox intended for specifying search criteria.
 * @see https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
export class SearchBox extends TextBox {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('keydown', this.onKeyDown)
        this.on('input', this.onInput)
        this._clearButton = new Button({
            tabIndex : null,
            className : 'clearbutton',
            onclick : event => this.onClearButtonClick(event)
        })
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClearButtonClick(event) {
        if(this.value && !this.readOnly) {
            this.value = ''
            this.emit('input', { bubbles : true })
        }
        this.focus()
    }

    /**
     * @param {InputEvent} event
     */
    onInput(event) {
        this._clearButton.parentNode = this.value? this : null
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key === 'Escape' && this.value) {
            event.stopPropagation()
            if(!this.readOnly) {
                this.value = ''
                this.emit('input', { bubbles : true })
            }
        }
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this._clearButton.parentNode = value? this : null
        super.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return super.value
    }
}

/**
 * @param {*} [init]
 * @returns {SearchBox}
 */
export function searchbox(init) {
    return new SearchBox(init)
}
