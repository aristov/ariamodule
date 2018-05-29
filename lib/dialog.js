import { ARIAWindow } from './window'

const { document } = window

/**
 * @summary A dialog is a descendant window of the primary window of a web application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#dialog
 */
export class Dialog extends ARIAWindow {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._trigger = null
        this.classList = 'popup'
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)
        document.addEventListener('click', this.onDocumentClick)
        document.addEventListener('keydown', this.onDocumentKeyDown)
        super.init(init)
    }

    /**
     * @param {*} trigger
     */
    bindTrigger(trigger) {
        this.onTriggerKeyDown = this.onTriggerKeyDown.bind(this)
        trigger.on('keydown', this.onTriggerKeyDown)
        trigger.controls = this
        if(!trigger.expanded) {
            trigger.expanded = true
        }
    }

    /**
     * Unsetup trigger
     */
    unbindTrigger() {
        const trigger = this._trigger
        trigger.un('keydown', this.onTriggerKeyDown)
        if(trigger.controls.length) {
            trigger.controls = null
        }
    }

    /**
     * Focus the first widget inside the dialog
     */
    focus() {
        const widget = this.focusTargets[0]
        if(widget) {
            widget.focus()
        }
    }

    /**
     * @returns {boolean}
     */
    focusTrigger() {
        const trigger = this.trigger
        if(trigger && typeof trigger.focus === 'function') {
            trigger.focus()
            return true
        }
        return false
    }

    /**
     * Cancel and remove the dialog
     */
    cancel() {
        this.emit('cancel', { bubbles : true, cancelable : true })
        this.remove()
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        if(this.assertive) {
            if(this.modal) {
                this.focus()
            }
        }
        else {
            const trigger = this.trigger
            if(this.contains(target) || (trigger && trigger.contains(target))) {
                void null
            }
            else this.cancel()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onDocumentKeyDown(event) {
        const key = event.key
        if(key === 'Escape') {
            this.onEscapeKeyDown(event)
        }
        if(key === 'Tab') {
            this.onTabKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(!this.assertive) {
            this.cancel()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        const focusTargets = this.focusTargets
        const last = focusTargets[focusTargets.length - 1]
        if(!event.shiftKey && event.target === last.node) {
            event.preventDefault()
            this.focusTrigger() || this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTriggerKeyDown(event) {
        if(event.key === 'Tab' && event.shiftKey) {
            const focusTargets = this.focusTargets
            const last = focusTargets[focusTargets.length - 1]
            if(last) {
                event.preventDefault()
                last.focus()
            }
        }
        if(event.key === 'Escape' && !this.assertive) {
            this.cancel()
        }
    }

    /**
     * Remove the dialog
     */
    remove() {
        const trigger = this.trigger
        if(trigger) {
            if(trigger.expanded) {
                trigger.expanded = false
            }
            this.focusTrigger()
            this.trigger = null
        }
        this.ownerDocument.un('click', this.onDocumentClick)
        this.ownerDocument.un('keydown', this.onDocumentKeyDown)
        super.remove()
    }

    /**
     * @param {boolean} assertive
     */
    set assertive(assertive) {
        this.classList.toggle('assertive', assertive)
    }

    /**
     * @returns {boolean}
     */
    get assertive() {
        return this.classList.contains('assertive')
    }

    /**
     * @param {*} trigger
     */
    set trigger(trigger) {
        trigger = this.getInstanceOf(trigger)
        const _trigger = this._trigger
        if(trigger && !_trigger) {
            this.bindTrigger(trigger)
        }
        else if(_trigger && !trigger) {
            this.unbindTrigger()
        }
        else if(trigger && _trigger) {
            this.trigger = null
            this.trigger = trigger
        }
        this._trigger = trigger
    }

    /**
     * @returns {RoleType|null}
     */
    get trigger() {
        return this._trigger
    }

    /**
     * @returns {array}
     */
    get focusTargets() {
        return this.findAll('*', ({ node }) => {
            const { tabIndex, disabled } = node
            return tabIndex > -1 && !disabled
        })
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
 * @returns {Dialog}
 */
export function dialog(init) {
    return new Dialog(init)
}
