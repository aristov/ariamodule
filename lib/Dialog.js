import { Div } from 'htmlmodule/lib/Div'
import { Role } from './Role'
import { Window } from './Window'
import { Expanded } from './aria/Expanded'

/**
 * @summary A dialog is a descendant window of the primary window of a web application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#dialog
 * todo focusPrevious + focusNext
 */
export class Dialog extends Window {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._static = true
        this._trigger = null
        this._inner = new Inner({ parentNode : this })
        super.expanded = false
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('transitionend', this.onTransitionEnd)
        super.init(init)
    }

    /**
     * Add event listeners to the document
     */
    bindEvents() {
        const ownerDocument = this.ownerDocument
        ownerDocument.on('click', this.onDocumentClick, this)
        ownerDocument.on('touchend', this.onDocumentClick, this)
        ownerDocument.on('keydown', this.onDocumentKeyDown, this)
        if(this.modal) {
            ownerDocument.on('focusin', this.onDocumentFocusIn, this)
        }
    }

    /**
     * Remove event listeners from the document
     */
    unbindEvents() {
        const ownerDocument = this.ownerDocument
        ownerDocument.un('click', this.onDocumentClick, this)
        ownerDocument.un('touchend', this.onDocumentClick, this)
        ownerDocument.un('keydown', this.onDocumentKeyDown, this)
        if(this.modal) {
            ownerDocument.un('focusin', this.onDocumentFocusIn, this)
        }
    }

    /**
     * Focus the first focusable element inside the dialog
     */
    focus() {
        const elements = this.focusableElements
        if(elements.length) {
            elements[0].focus()
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
        if(!this.closest('body')) {
            this._static = false
            this._trigger && this._trigger.after(this)
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
        if(!this._inner.contains(target) && !(trigger && trigger.contains(target))) {
            this.onOutsideClick(event)
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        if(this.expanded && !this._inner.contains(event.target)) {
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
     * @param {MouseEvent} event
     */
    onOutsideClick(event) {
        if(this.emit('cancel', { cancelable : true })) {
            this.expanded = false
        }
        else this.modal && this.focus()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        if(this.modal) {
            const elements = this.focusableElements.filter(({ tabIndex }) => tabIndex > -1)
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
        if(event.target === this.node) {
            if(Expanded.getAttrOf(this).node.value === 'true-false') {
                this._static || this.remove()
            }
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
        if(name === 'expanded') {
            setTimeout(() => super.setProperty(name, value))
        }
        else super.setProperty(name, value)
    }

    /**
     * @param {*} content
     */
    set content(content) {
        this._inner.children = content
    }

    /**
     * @returns {array.ElementAssembler|*}
     */
    get content() {
        this._inner.children
    }

    /**
     * @param {boolean} expanded
     */
    set expanded(expanded) {
        if(expanded) {
            this.install()
            this.bindEvents()
            super.expanded = true
            this.focus()
        }
        else {
            super.expanded = false
            if(getComputedStyle(this.node).transitionDuration === '0s') {
                this._static || this.remove()
            }
            this.unbindEvents()
            this.trigger && this.trigger.focus()
        }
    }

    /**
     * @returns {boolean}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * focuses:
     *  [tabindex]
     *  a[href]
     *  map[name='MAPNAME'] > area[href] & img[usemap='#MAPNAME']
     *  button:enabled
     *  input:enabled
     *  select:enabled
     *  textarea:enabled
     *  iframe
     *      :not([hidden])
     *
     * not focuses:
     *  a:not([href])
     *  area:not([href])
     *  button:disabled
     *  input:disabled
     *  select:disabled
     *  textarea:disabled
     *
     * may fail:
     *  area[href]
     *  embed
     *  object
     *
     * @returns {array}
     *
     * fixme filter elements in hidden container
     */
    get focusableElements() {
        return this.findAll(':not(:disabled)', ({ node }) => {
            return node.hasAttribute('tabindex') || (node.tabIndex > -1 && !('href' in node) || node.href)
        })
    }

    /**
     * @param {*} trigger {Role|ElementAssembler|Element|*|null}
     */
    set trigger(trigger) {
        this._trigger = this.getRoleOf(trigger) || (trigger instanceof Role?
            trigger.ownerElement :
            this.getInstanceOf(trigger))
    }

    /**
     * @returns {Role|ElementAssembler|*|null}
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

class Inner extends Div {}

Role.Dialog = Dialog
