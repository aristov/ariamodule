import { Div } from 'htmlmodule/lib/div'
import { ARIAWindow } from './window'

/**
 * @summary A dialog is a descendant window of the primary window of a web application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#dialog
 * todo transition
 * todo disposable
 * todo focusPrevious + focusNext
 * todo AlertDialog tests
 */
export class Dialog extends ARIAWindow {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this._trigger = null
        this._content = new Div({ parentNode : this })
    }

    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('transitionend', this.onTransitionEnd, this)
        this.ownerDocument.on('click', this.onDocumentClick, this)
        this.ownerDocument.on('keydown', this.onDocumentKeyDown, this)
        if(this.modal) {
            this.ownerDocument.on('focusin', this.onDocumentFocusIn, this)
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
        this.expanded = false
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        const trigger = this.trigger
        if(this.expanded && this.closest('body') && !this._content.contains(target)
            && !(trigger && trigger.contains(target))) {
            if(this.emit('cancel', { cancelable : true })) {
                this.cancel()
            }
            else if(this.modal) {
                this.focus()
            }
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        if(this.expanded && this.closest('body') && !this._content.contains(event.target)) {
            this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onDocumentKeyDown(event) {
        if(this.expanded && this.closest('body')) {
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
     * @param {TransitionEvent} event
     */
    onTransitionEnd(event) {
        if(event.target === this.ownerElement.node || event.target === this._content.node) {
            if(this.expanded === false) {
                this.expanded = undefined
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
        // this.hidden = true
        if(this.modal) {
            this.ownerDocument.un('focusin', this.onDocumentFocusIn, this)
        }
        this.ownerDocument.un('click', this.onDocumentClick, this)
        this.ownerDocument.un('keydown', this.onDocumentKeyDown, this)
        super.remove()
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

    set expanded(expanded) {
        if(expanded && !this.closest('body')) {
            this.parentNode = document.body
            setTimeout(() => super.expanded = true, 20)
        }
        else {
            super.expanded = expanded
        }
        if(expanded) {
            this.focus()
        }
        else if(expanded === false) {
            this.trigger && this.trigger.focus()
        }
    }

    get expanded() {
        return super.expanded
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        if(!hidden && !this.closest('body')) {
            this.parentNode = document.body
        }
        const { transitionDuration } = getComputedStyle(this.ownerElement.node)
        const focus = () => {
            if(hidden) {
                this.trigger && this.trigger.focus()
            }
            else this.focus()
        }
        if(hidden && transitionDuration && transitionDuration !== '0s') {
            const ontransitionend = event => {
                super.hidden = hidden
                this.classList.remove('transition')
                this.un('transitionend', ontransitionend)
                focus()
            }
            console.log(hidden)
            this.classList.add('transition')
            this.on('transitionend', ontransitionend)
        }
        else {
            super.hidden = hidden
            focus()
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
