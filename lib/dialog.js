import { Div } from 'htmlmodule/lib/div'
import { ARIAWindow } from './window'

/**
 * @summary A dialog is a descendant window of the primary window of a web application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#dialog
 * todo focusPrevious + focusNext
 */
export class Dialog extends ARIAWindow {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this._backdrop = null
        if(init && init.constructor === Object && init.modal) {
            this.modal = true
        }
    }

    /**
     * @param {*} [init]
     */
    init(init) {
        this._trigger = null
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)
        document.addEventListener('click', this.onDocumentClick)
        document.addEventListener('keydown', this.onDocumentKeyDown)
        if(this.modal) {
            this.onDocumentFocusIn = this.onDocumentFocusIn.bind(this)
            document.addEventListener('focusin', this.onDocumentFocusIn)
        }
        super.init(init)
        this.focus()
    }

    /**
     * Focus the first widget inside the dialog
     */
    focus() {
        const element = this.find('*', ({ node }) => {
            return !node.disabled && node.tabIndex > -1 || node.hasAttribute('tabindex')
        })
        if(element) {
            element.focus()
        }
        else {
            this.tabIndex = 0
            super.focus()
        }
    }

    /**
     * Cancel the dialog
     */
    cancel() {
        this.hidden = true
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        const trigger = this.trigger
        if(!this.hidden && this.closest('body') && !this.contains(target)
            && !(trigger && trigger.contains(target))) {
            if(this.emit('cancel', { cancelable : true })) {
                this.cancel()
            }
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        if(!this.hidden && this.closest('body') && !this.contains(event.target)) {
            this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onDocumentKeyDown(event) {
        if(!this.hidden && this.closest('body')) {
            const key = event.key
            if(key === 'Escape') {
                this.onEscapeKeyDown(event)
            }
            else if(key === 'Tab') {
                this.onTabKeyDown(event)
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.emit('cancel', { cancelable : true })) {
            this.cancel()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        if(this.modal) {
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
     * Remove the dialog
     */
    remove() {
        if(this.trigger) {
            this.trigger.controls = this.trigger.controls.filter(item => item !== this)
        }
        this.hidden = true
        if(this.modal) {
            this._backdrop.remove()
            document.removeEventListener('focusin', this.onDocumentFocusIn)
        }
        document.removeEventListener('click', this.onDocumentClick)
        document.removeEventListener('keydown', this.onDocumentKeyDown)
        super.remove()
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
        if(this.modal) {
            this._backdrop.hidden = hidden
        }
        if(hidden) {
            this.trigger && this.trigger.focus()
        }
        else this.focus()
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return super.hidden
    }

    /**
     * @param {boolean} modal
     */
    set modal(modal) {
        if(modal && !this.modal) {
            this._backdrop = new Backdrop(this)
            super.modal = true
        }
    }

    /**
     * @returns {boolean}
     */
    get modal() {
        return super.modal
    }

    /**
     * @returns {array}
     */
    get tabbableElements() {
        return this.findAll('*', ({ node }) => node.tabIndex > -1 && !node.disabled)
    }

    /**
     * @param {*} trigger {RoleAttrAssembler|ElementAssembler|Element|*|null}
     */
    set trigger(trigger) {
        this._trigger = this.getRoleOf(trigger) || this.getElementInstanceOf(trigger)
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|*|null}
     */
    get trigger() {
        return this._trigger
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export class Backdrop extends Div {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.className = 'backdrop'
        super.init(init)
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        if(!hidden) {
            this.parentNode = document.body
        }
        super.hidden = hidden
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return super.hidden
    }
}

/**
 * @param {*} [init]
 * @returns {Dialog}
 */
export function dialog(init) {
    return new Dialog(init)
}

/**
 * The `oncancel` event handler IDL attribute polyfill
 */
if(!HTMLElement.prototype.hasOwnProperty('oncancel')) {
    Object.defineProperty(HTMLElement.prototype, 'oncancel', {
        /**
         * @param {function|null} oncancel
         */
        set(oncancel) {
            const handler = this.__oncancel_event_handler__
            if(handler) {
                this.removeEventListener('cancel', handler)
            }
            if(oncancel) {
                this.addEventListener('cancel', oncancel)
            }
            this.__oncancel_event_handler__ = oncancel || null
        },

        /**
         * @returns {function|null}
         */
        get() {
            return this.__oncancel_event_handler__ || null
        }
    })
}
