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
        document.removeEventListener('focus', this.onDocumentFocus, true)
        this._backdrop.remove()
        super.remove()
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocus(event) {
        if(!this.contains(event.target)) {
            this.focus()
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
