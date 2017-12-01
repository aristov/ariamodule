import { ARIAWindow } from './window'
import { div } from 'htmlmodule'

const LOCAL_NAME = 'div'

const { SHOW_ELEMENT, FILTER_ACCEPT, FILTER_REJECT } = NodeFilter

export class Dialog extends ARIAWindow {
    /**
     * @param {*} init
     */
    init(init) {
        this.trigger = null
        this.on('keydown', event => this.onKeyDown(event))
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
        if(init.modal) this.createBackdrop(init)
        if('assertive' in init) {
            this.assertive = init.assertive
            delete init.assertive
        }
        if('hidden' in init) {
            const hidden = init.hidden
            delete init.hidden
            super.init(init)
            this.hidden = hidden
        }
        else {
            super.init(init)
            this.hidden = false
        }
    }

    /**
     * @param {Object} init
     */
    createBackdrop(init) {
        const backdrop = div({
            className : 'backdrop',
            hidden : init.hidden,
            children : div(this)
        })
        this.backdrop = backdrop.node
    }

    /**
     * Remove the dialog
     */
    remove() {
        this.hidden = true
        const node = this.backdrop || this.node
        if(node.parentNode) node.remove()
    }

    /**
     * @param {Node} target
     */
    onDocumentClick({ target }) {
        const trigger = this.trigger
        if(!this.node.contains(target) &&
            !(trigger && trigger.node.contains(target))) {
            this.hidden = true
            this.emit('reject')
        }
    }

    /**
     * @param {Node} target
     */
    onDocumentFocus({ target }) {
        if(!this.node.contains(target)) {
            const widget = this.widgets[0]
            if(widget) widget.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(!this.assertive) {
            const trigger = this.trigger
            this.hidden = true
            if(trigger && typeof trigger.focus === 'function') {
                trigger.focus()
            }
            this.emit('reject')
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
    onTabKeyDown(event) {
        const { modal, widgets, trigger } = this
        const { target, shiftKey } = event
        const firstWidget = widgets[0]
        const lastWidget = widgets[widgets.length - 1]
        if(shiftKey && modal && target === firstWidget) {
            event.preventDefault()
            lastWidget.focus()
        }
        if(!shiftKey && target === lastWidget) {
            event.preventDefault()
            if(modal) firstWidget.focus()
            else if(trigger && typeof trigger.focus === 'function') {
                trigger.focus()
            }
        }
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
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        if((this.backdrop || this.node).hidden = hidden) {
            const trigger = this.trigger
            if(trigger) {
                trigger.expanded = 'false'
                trigger.focus()
                this.trigger = null
            }
            if(!this.assertive) {
                document.removeEventListener('click', this.onDocumentClick)
            }
            else if(this.modal) {
                document.removeEventListener('focus', this.onDocumentFocus, true)
            }
        }
        else {
            if(!this.assertive) {
                document.addEventListener('click', this.onDocumentClick)
            }
            if(this.modal) {
                if(this.assertive) {
                    document.addEventListener('focus', this.onDocumentFocus, true)
                }
                const widgets = this.widgets
                if(widgets.length) widgets[0].focus()
            }
        }
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return (this.backdrop || this.node).hidden
    }

    /**
     * @param {Node} parentNode
     */
    set parentNode(parentNode) {
        parentNode.append(this.backdrop || this.node)
    }

    /**
     * @returns {Node}
     */
    get parentNode() {
        return (this.backdrop || this.node).parentNode
    }

    /**
     * @returns {Array}
     */
    get widgets() {
        const iterator = document.createNodeIterator(this.node, SHOW_ELEMENT,
            ({ tabIndex, disabled, hidden, type }) => {
                return tabIndex > -1 && !disabled && !hidden && type !== 'hidden'?
                    FILTER_ACCEPT :
                    FILTER_REJECT
            })
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
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {Dialog}
 */
export function dialog(...init) {
    return new Dialog(...init)
}
