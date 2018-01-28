import { Dialog } from './dialog'
import { Div } from 'htmlmodule'

/**
 * A type of dialog that contains an alert message,
 * where initial focus goes to an element within the dialog.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#alertdialog
 */
export class AlertDialog extends Dialog {
    /**
     * @param {*} init
     */
    init(init) {
        super.init(init)
        this.modal = true
        this.createBackdrop()
        if(this.assertive) {
            this.ownerDocument.on(
                'focus',
                this.onDocumentFocus = this.onDocumentFocus.bind(this),
                true)
        }
        this.onResize = this.onResize.bind(this)
        window.addEventListener('resize', this.onResize)
        this.focus()
    }

    /**
     * Adjust dialog height
     */
    adjustHeight() {
        const node = this.ownerElement.node
        const style = window.getComputedStyle(node)
        const marginTop = Number(style.marginTop.replace('px', ''))
        const marginBottom = Number(style.marginBottom.replace('px', ''))
        let margin = marginTop + marginBottom
        if(isNaN(margin)) margin = 0
        node.style.maxHeight = window.innerHeight < node.scrollHeight + margin?
            window.innerHeight - margin + 'px' :
            'none'
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
        this.adjustHeight()
    }

    /**
     * Remove the dialog
     */
    remove() {
        if(this.assertive) {
            this.ownerDocument.un('focus', this.onDocumentFocus, true)
        }
        super.remove()
        this._backdrop.remove()
        window.removeEventListener('resize', this.onResize)
    }

    /**
     * @param {Node} target
     */
    onDocumentFocus({ target }) {
        if(!this.contains(target)) this.focus()
    }

    /**
     * @param {Event} event
     */
    onResize(event) {
        this.adjustHeight()
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
 * @returns {AlertDialog}
 */
export function alertDialog(...init) {
    return new AlertDialog(...init)
}
