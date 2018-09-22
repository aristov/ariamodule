import { Div } from 'htmlmodule/lib/Div'
import { Select } from './Select'
import { MenuItem } from './MenuItem'

let undefined

/**
 * @summary A type of widget that offers a list of choices to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menu
 * todo orientation = horizontal
 */
export class Menu extends Select {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._transition = false
        this._trigger = null
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('transitionend', this.onTransitionEnd)
        super.init(init)
    }

    /**
     * Focus the trigger element
     */
    focus() {
        this._trigger && this._trigger.focus()
    }

    install() {
        const trigger = this._trigger
        if(trigger) {
            const node = trigger.ownerElement.node
            if(trigger instanceof MenuItem && trigger.parentMenu.orientation === 'vertical') {
                this.style.top = node.offsetTop + 'px'
                this.style.left = node.offsetLeft + node.offsetWidth + 'px'
            }
            else {
                this.style.top = node.offsetTop + node.offsetHeight + 'px'
                this.style.left = node.offsetLeft + 'px'
            }
            this._trigger && this._trigger.after(this)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onDocumentKeyDown(event) {
        if(event.key === 'Escape' && this.expanded) {
            const trigger = this._trigger
            if(trigger) {
                trigger.focus()
                trigger.expanded = false
            }
            else this.expanded = false
        }
    }

    /**
     * @param {TransitionEvent} event
     */
    onTransitionEnd(event) {
        if(event.target === this.ownerElement.node) {
            if(this.hidden === true) {
                super.expanded = false
                this._transition = false
            }
            else this._transition = true
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        if(!this.contains(target)) {
            const trigger = this._trigger
            if(trigger) {
                if(!trigger.contains(target)) {
                    trigger.expanded = false
                }
            }
            else this.expanded = false
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        const target = event.target
        if(!this.contains(target)) {
            const trigger = this._trigger
            if(trigger) {
                if(!trigger.contains(target)) {
                    trigger.expanded = false
                }
            }
            else this.expanded = false
        }
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

    bindEvents() {
        const ownerDocument = this.ownerDocument
        ownerDocument.on('click', this.onDocumentClick, this)
        ownerDocument.on('focusin', this.onDocumentFocusIn, this)
        ownerDocument.on('keydown', this.onDocumentKeyDown, this)
    }

    unbindEvents() {
        const ownerDocument = this.ownerDocument
        ownerDocument.un('click', this.onDocumentClick, this)
        ownerDocument.un('focusin', this.onDocumentFocusIn, this)
        ownerDocument.un('keydown', this.onDocumentKeyDown, this)
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        if(super.hidden = hidden) {
            if(!this._transition || getComputedStyle(this.ownerElement.node).transitionDuration === '0s') {
                super.expanded = false
            }
            this.unbindEvents()
        }
        else {
            this.install()
            this.bindEvents()
            setTimeout(() => super.expanded = true, 20)
        }
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return super.hidden
    }

    /**
     * @returns {array.MenuItem|array.MenuItemCheckBox|array.MenuItemRadio}
     */
    get items() {
        return this.findAll(MenuItem, item => {
            const menu = item.closest(Menu)
            return !menu || menu === this
        })
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        super.orientation = orientation
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return super.orientation || 'vertical'
    }

    /**
     * @returns {Menu|*}
     */
    get parentMenu() {
        return this._trigger && this._trigger.parentMenu
    }

    /**
     * @param {Role} trigger
     */
    set trigger(trigger) {
        this._trigger = trigger
    }

    /**
     * @returns {Role}
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
     * @returns {class}
     */
    static get elementAssembler() {
        return Div
    }
}
