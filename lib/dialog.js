import { ARIAWindow } from './window'
import { Div } from 'htmlmodule'

const { document } = window
const { SHOW_ELEMENT, FILTER_ACCEPT, FILTER_REJECT } = NodeFilter

/**
 * @param {Node} node
 * @returns {Number}
 */
function iteratorHandler(node) {
    const { tabIndex, disabled, hidden, type } = node
    return tabIndex < 0 || disabled || hidden || type === 'hidden'?
        FILTER_REJECT :
        FILTER_ACCEPT
}

/**
 * A dialog is a descendant window of the primary window of a web application.
 * https://www.w3.org/TR/wai-aria-1.1/#dialog
 */
export class Dialog extends ARIAWindow {
    /**
     * @param {*} init
     */
    init(init) {
        this._trigger = null
        super.init(init)
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)
        this.ownerDocument.on('click', this.onDocumentClick)
        this.ownerDocument.on('keydown', this.onDocumentKeyDown)
        this.classList.add('popup')
    }

    /**
     * @param {*} trigger
     */
    bindTrigger(trigger) {
        this.onTriggerKeyDown = this.onTriggerKeyDown.bind(this)
        trigger.on('keydown', this.onTriggerKeyDown)
        trigger.controls = this
        if(trigger.expanded === 'false') {
            trigger.expanded = 'true'
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
        const widget = this.widgets[0]
        if(widget) widget.focus()
    }

    /**
     * @returns {Boolean}
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
     * @param {Node} target
     */
    onDocumentClick({ target }) {
        if(!this.assertive) {
            const trigger = this.trigger
            if(this.contains(target) || !trigger || trigger.contains(target)) {
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
        if(key === 'Escape') this.onEscapeKeyDown(event)
        if(key === 'Tab') this.onTabKeyDown(event)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(!this.assertive) this.cancel()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTabKeyDown(event) {
        const widgets = this.widgets
        const last = widgets[widgets.length - 1]
        if(!event.shiftKey && event.target === last) {
            event.preventDefault()
            this.focusTrigger() || this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTriggerKeyDown(event) {
        if(event.key === 'Tab' && event.shiftKey) {
            const widgets = this.widgets
            const last = widgets[widgets.length - 1]
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
            if(trigger.expanded === 'true') {
                trigger.expanded = 'false'
            }
            this.focusTrigger()
            this.trigger = null
        }
        this.ownerDocument.un('click', this.onDocumentClick)
        this.ownerDocument.un('keydown', this.onDocumentKeyDown)
        super.remove()
    }

    /**
     * @param {Boolean} assertive
     */
    set assertive(assertive) {
        this.dataset.assertive = String(assertive)
    }

    /**
     * @returns {Boolean}
     */
    get assertive() {
        return this.dataset.assertive === 'true'
    }

    /**
     * @param {*} trigger
     */
    set trigger(trigger) {
        const _trigger = this._trigger
        if(trigger && !_trigger) this.bindTrigger(trigger)
        else if(_trigger && !trigger) this.unbindTrigger()
        else if(trigger && _trigger) {
            this.trigger = null
            this.trigger = trigger
        }
        this._trigger = trigger
    }

    /**
     * @returns {null|RoleType}
     */
    get trigger() {
        return this._trigger
    }

    /**
     * @returns {Array}
     */
    get widgets() {
        const iterator = document.createNodeIterator(
            this.ownerElement.node,
            SHOW_ELEMENT,
            iteratorHandler)
        const widgets = []
        let node
        while(node = iterator.nextNode()) widgets.push(node)
        return widgets
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {String}
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {Dialog}
 */
export function dialog(...init) {
    return new Dialog(...init)
}
