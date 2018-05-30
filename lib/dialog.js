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
        this._oncancel = null
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)
        document.addEventListener('click', this.onDocumentClick)
        document.addEventListener('keydown', this.onDocumentKeyDown)
        super.init(init)
    }

    /**
     * Focus the first widget inside the dialog
     */
    focus() {
        const elements = this.tabbableElements
        if(elements.length) {
            elements[0].focus() // todo must focus the first _focusable_ element
        }
        else {
            this.tabIndex = 0
            this.focus()
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
        // this.hidden = true // todo
        this.remove()
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        if(!this.emit('cancel', { cancelable : true })) {
            this.modal && this.focus()
        }
        else {
            const trigger = this.trigger
            if(!this.contains(target) && !(trigger && trigger.contains(target))) {
                this.cancel()
            }
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
        if(this.emit('cancel', { cancelable : true })) {
            this.cancel()
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

    /**
     * Remove the dialog
     */
    remove() {
        const trigger = this.trigger
        document.removeEventListener('click', this.onDocumentClick)
        document.removeEventListener('keydown', this.onDocumentKeyDown)
        if(trigger) {
            trigger.expanded = false
            trigger.controls = trigger.controls.filter(item => item !== this)
            this.focusTrigger()
        }
        super.remove()
    }

    /**
     * @param {function|null} oncancel
     */
    set oncancel(oncancel) {
        const _oncancel = this._oncancel
        if(_oncancel) {
            this.un('cancel', _oncancel)
        }
        if(oncancel) {
            this.on('cancel', this._oncancel = oncancel.bind(this))
        }
    }

    /**
     * @returns {array}
     */
    get tabbableElements() {
        const elements = this.findAll('*', ({ node }) => {
            const { tabIndex, disabled } = node
            return tabIndex > -1 && !disabled
        })
        return !this.modal && this.trigger?
            [this.trigger, ...elements] :
            elements
    }

    /**
     * @param {*} trigger {RoleAttrAssembler|ElementAssembler|Element|*|null}
     */
    set trigger(trigger) {
        trigger = this.constructor.getElementOf(trigger)
        if(trigger && trigger.controls) {
            if(!trigger.controls.includes(this)) {
                trigger.controls = [...trigger.controls, this]
            }
            trigger.expanded = true
        }
        this._trigger = trigger
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|*|null}
     * todo get trigger from document.activeElement when opening or document.body
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

/**
 * @param {*} [init]
 * @returns {Dialog}
 */
export function dialog(init) {
    return new Dialog(init)
}
