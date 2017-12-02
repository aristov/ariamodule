/**
 * https://www.w3.org/TR/wai-aria-1.1/#dialog
 */

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

export class Dialog extends ARIAWindow {
    /**
     * @param {*} init
     */
    init(init) {
        this._trigger = null
        this.on('keydown', this.onKeyDown = this.onKeyDown.bind(this))
        document.addEventListener('click',
            this.onDocumentClick = this.onDocumentClick.bind(this))
        super.init(init)
        this.classList.add('popup')
    }

    focus() {
        const widget = this.widgets[0]
        if(widget) widget.focus()
    }

    focusTrigger() {
        const trigger = this.trigger
        if(trigger && typeof trigger.focus === 'function') {
            trigger.focus()
        }
    }

    cancel() {
        this.focusTrigger()
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
    onKeyDown(event) {
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
        const { widgets } = this
        const last = widgets[widgets.length - 1]
        if(!event.shiftKey && event.target === last) {
            event.preventDefault()
            this.focusTrigger()
        }
    }

    onTriggerKeyDown(event) {
        if(event.key === 'Tab' && event.shiftKey) {
            const last = this.widgets[this.widgets.length - 1]
            if(last) {
                event.preventDefault()
                last.focus()
            }
        }
        if(event.key === 'Escape') this.cancel()
    }

    remove() {
        const trigger = this.trigger
        if(trigger) {
            if(trigger.expanded) trigger.expanded = 'false'
            this.focusTrigger()
            this.trigger = null
        }
        this.un('keydown', this.onKeyDown)
        document.removeEventListener('click', this.onDocumentClick)
        super.remove()
    }

    set assertive(assertive) {
        this.dataset.assertive = String(assertive)
    }

    get assertive() {
        return this.dataset.assertive === 'true'
    }

    set trigger(trigger) {
        const _trigger = this._trigger
        if(trigger && !_trigger) {
            this.onTriggerKeyDown = this.onTriggerKeyDown.bind(this)
            trigger.on('keydown', this.onTriggerKeyDown)
            trigger.controls = this
            if(trigger.expanded) trigger.expanded = 'true'
        }
        else if(_trigger && !trigger) {
            _trigger.un('keydown', this.onTriggerKeyDown)
            if(_trigger.controls.length) _trigger.controls = null
        }
        else if(trigger && _trigger) {
            this.trigger = null
            this.trigger = trigger
        }
        this._trigger = trigger
    }

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
 * @param {*} init
 * @returns {Dialog}
 */
export function dialog(...init) {
    return new Dialog(...init)
}
