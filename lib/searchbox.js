import { Button } from './button'
import { Textbox } from './textbox'

/**
 * @summary A type of textbox intended for specifying search criteria.
 * @see https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
export class Searchbox extends Textbox {
    init(init) {
        super.init(init)
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('input', this.onInput.bind(this))
        this.append(this._clearButton = new Button({
            onclick : this.onClearButtonClick.bind(this),
            hidden : !this.value,
            tabIndex : '-1'
        }))
    }

    clear() {
        if(this.value) {
            this.value = ''
            this.emit('input', { bubbles : true })
        }
    }

    onClearButtonClick(event) {
        this.clear()
        this.focus()
    }

    onInput(event) {
        this._clearButton.hidden = !this.value
    }

    onKeyDown(event) {
        if(event.key === 'Escape' && this.value) {
            event.stopPropagation()
            this.clear()
        }
    }
}

/**
 * @param {*} [init]
 * @returns {Searchbox}
 */
export function searchbox(init) {
    return new Searchbox(init)
}
