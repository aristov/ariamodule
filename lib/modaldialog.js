import { Dialog } from './dialog'
import { Div } from 'htmlmodule'

export class ModalDialog extends Dialog {
    /**
     * @param {*} init
     */
    init(init) {
        super.init(init)
        this.modal = true
        this.createBackdrop()
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
        if(this.assertive) {
            document.addEventListener('focus', this.onDocumentFocus, true)
        }
        this.focus()
    }

    /**
     * Create a backdrop
     */
    createBackdrop() {
        this.backdrop = new Div({
            parentNode : document.body,
            className : 'backdrop',
            children : new Div(this)
        })
    }

    /**
     * Remove the dialog
     */
    remove() {
        super.remove()
        this.backdrop.remove()
        if(this.assertive) {
            document.removeEventListener('focus', this.onDocumentFocus, true)
        }
    }

    /**
     * @param {Node} target
     */
    onDocumentFocus({ target }) {
        if(!this.contains(target)) this.focus()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        const { widgets } = this
        const { target, shiftKey } = event
        const first = widgets[0]
        const last = widgets[widgets.length - 1]
        if(shiftKey && target === first) {
            event.preventDefault()
            last.focus()
        }
        else if(!shiftKey && target === last) {
            event.preventDefault()
            first.focus()
        }
        else super.onTabKeyDown(event)
    }
}

/**
 * @param {*} [init]
 * @returns {ModalDialog}
 */
export function modalDialog(...init) {
    return new ModalDialog(...init)
}
