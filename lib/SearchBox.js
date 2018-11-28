import { Span } from 'htmlmodule/lib/Span'
import { Role } from './Role'
import { TextBox } from './TextBox'

/**
 * @summary A type of textbox intended for specifying search criteria.
 * @see https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
export class SearchBox extends TextBox {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._cancelButton = new SearchCancelButton({
            parentNode : this,
            tabIndex : null,
            onclick : event => this.onClearButtonClick(event)
        })
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
        super.onInput(event)
        this._cancelButton.parentNode = this.value? this : null
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        super.onKeyDown(event)
        if(event.key === 'Escape' && this.value) {
            event.stopPropagation()
            if(!this.readOnly) {
                this.value = ''
                this.emit('input', { bubbles : true })
            }
        }
    }
}

class SearchCancelButton extends Span {}

SearchBox.SearchCancelButton = SearchCancelButton
Role.SearchBox = SearchBox
