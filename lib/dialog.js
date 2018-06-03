import { Div } from 'htmlmodule/lib/div'
import { ARIAWindow } from './window'

/**
 * @summary A dialog is a descendant window of the primary window of a web application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#dialog
 * todo focusPrevious + focusNext
 * todo AlertDialog tests
 */
export class Dialog extends ARIAWindow {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this._static = true
        this._trigger = null
        this._transition = false
        this._content = new Div({ parentNode : this })
        super.expanded = false
        super.hidden = true
    }

    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('transitionend', this.onTransitionEnd, this) // fixme
        super.init(init)
    }

    /**
     * Add event listeners to the document
     */
    bindEvents() {
        this.ownerDocument.on('click', this.onDocumentClick, this)
        this.ownerDocument.on('keydown', this.onDocumentKeyDown, this)
        if(this.modal) {
            this.ownerDocument.on('focusin', this.onDocumentFocusIn, this)
        }
    }

    /**
     * Remove event listeners from the document
     */
    unbindEvents() {
        this.ownerDocument.un('click', this.onDocumentClick, this)
        this.ownerDocument.un('keydown', this.onDocumentKeyDown, this)
        if(this.modal) {
            this.ownerDocument.un('focusin', this.onDocumentFocusIn, this)
        }
    }

    /**
     * Focus the first focusable element inside the dialog
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
     * Append the dialog and attach document events
     */
    install() {
        if(!this.closest('body') ) {
            this._static = false
            this.trigger && this.trigger.after(this)
        }
        if(this.modal) {
            this.parentNode = document.body
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        const trigger = this.trigger
        if(!this._content.contains(target) && !(trigger && trigger.contains(target))) {
            this.onOutsideClick(event)
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onOutsideClick(event) {
        if(this.emit('cancel', { cancelable : true })) {
            this.expanded = false
        }
        else this.modal && this.focus()
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        if(this.expanded && !this._content.contains(event.target)) {
            this.focus()
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
        else if(key === 'Tab') {
            this.onTabKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.emit('cancel', { cancelable : true })) {
            this.expanded = false
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
     * @param {TransitionEvent} event
     */
    onTransitionEnd(event) {
        if(event.target === this.ownerElement.node || event.target === this._content.node) {
            if(this.hidden === true) {
                super.expanded = false
                this._static || this.remove()
            }
            else this._transition = true
        }
    }

    /**
     * Remove the dialog
     */
    remove() {
        super.remove()
    }

    /**
     * @param {string} name
     * @param {string} value
     */
    setProperty(name, value) {
        if(name === 'expanded' || name === 'hidden') {
            setTimeout(() => super.setProperty(name, value))
        }
        else super.setProperty(name, value)
    }

    /**
     * @param {*} content
     */
    set content(content) {
        this._content.children = content
    }

    /**
     * @returns {array.ElementAssembler|*}
     */
    get content() {
        this._content.children
    }

    /**
     * @param {boolean} expanded
     */
    set expanded(expanded) {
        this.hidden = !expanded
    }

    /**
     * @returns {boolean}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
        if(hidden) {
            if(!this._transition) {
                super.expanded = false
                this._static || this.remove()
            }
            this._transition = false
            this.unbindEvents()
            this.trigger && this.trigger.focus()
        }
        else {
            this.install()
            this.bindEvents()
            this.focus()
            super.expanded = true
        }
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return super.hidden
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

    /**
     * @returns {string}
     */
    static get defaultPropertyName() {
        return 'content'
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
