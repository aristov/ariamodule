import { Dialog } from './dialog'
import { Div } from 'htmlmodule/lib/div'

/**
 * @summary A type of dialog that contains an alert message,
 *  where initial focus goes to an element within the dialog.
 * @see https://www.w3.org/TR/wai-aria-1.1/#alertdialog
 */
export class AlertDialog extends Dialog {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.modal = true
        this.createBackdrop()
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
        document.addEventListener('focus', this.onDocumentFocus, true)
        this.focus()
    }

    /**
     * Create a backdrop
     */
    createBackdrop() {
        this._backdrop = new Div({
            parentNode : document.body,
            className : 'backdrop',
            children : this
        })
    }

    /**
     * Remove the dialog
     */
    remove() {
        super.remove()
        this._backdrop.remove()
        document.removeEventListener('focus', this.onDocumentFocus, true)
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocus(event) {
        if(!this.contains(event.target)) {
            this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        const elements = this.tabbableElements
        const { target, shiftKey } = event
        const first = elements[0]
        const last = elements[elements.length - 1]
        if(shiftKey && target === first.node) {
            event.preventDefault()
            last.focus()
        }
        else if(!shiftKey && target === last.node) {
            event.preventDefault()
            first.focus()
        }
    }
}

/**
 * @param {*} [init]
 * @returns {AlertDialog}
 */
export function alertDialog(init) {
    return new AlertDialog(init)
}
