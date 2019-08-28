import { Div } from 'htmlmodule/lib/Div'
import { WindowAssembler } from 'htmlmodule/lib/WindowAssembler'
import { Role } from './Role'
import { Select } from './Select'
import { MenuItem } from './MenuItem'
import { Expanded } from './aria/Expanded'

let undefined
const win = new WindowAssembler({ target : window })

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
        this._trigger = null
    }

    /**
     * Focus the trigger element
     */
    focus() {
        this._trigger && this._trigger.focus()
    }

    install() {
        this._trigger && this._trigger.after(this)
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
     * @param {Event} event
     */
    onWindowScroll(event) {
        this.updatePosition()
    }

    /**
     * @param {Event} event
     */
    onWindowResize(event) {
        this.updatePosition()
    }

    /**
     * Bind global events
     */
    bindEvents() {
        const ownerDocument = this.ownerDocument
        ownerDocument.on('click', this.onDocumentClick, this)
        ownerDocument.on('focusin', this.onDocumentFocusIn, this)
        ownerDocument.on('keydown', this.onDocumentKeyDown, this)
        win.on('scroll', this.onWindowScroll, this)
        win.on('resize', this.onWindowResize, this)
    }

    /**
     * Unbind global events
     */
    unbindEvents() {
        const ownerDocument = this.ownerDocument
        ownerDocument.un('click', this.onDocumentClick, this)
        ownerDocument.un('focusin', this.onDocumentFocusIn, this)
        ownerDocument.un('keydown', this.onDocumentKeyDown, this)
        win.un('scroll', this.onWindowScroll, this)
        win.un('resize', this.onWindowResize, this)
    }

    /**
     * Update menu position
     */
    updatePosition() {
        const trigger = this._trigger
        const anchor = trigger.node.getBoundingClientRect()
        const menu = this.node.getBoundingClientRect()
        const style = this.style
        style.top = style.right = style.bottom = style.left = null
        if(trigger instanceof MenuItem && trigger.parentMenu.orientation === 'vertical') {
            if(anchor.right + menu.width > innerWidth) {
                style.right = innerWidth - anchor.left + 'px'
            }
            else style.left = anchor.right + 'px'
            if(anchor.top + menu.height > innerHeight) {
                style.bottom = innerHeight - anchor.bottom + 'px'
            }
            else style.top = anchor.top + 'px'
        }
        else {
            if(anchor.left + menu.width > innerWidth) {
                style.right = innerWidth - anchor.right + 'px'
            }
            else style.left = anchor.left + 'px'
            if(anchor.bottom + menu.height > innerHeight) {
                style.bottom = innerHeight - anchor.top + 'px'
            }
            else style.top = anchor.bottom + 'px'
        }
    }

    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        if(expanded === this.expanded) return
        if(expanded) {
            this.install()
            this.bindEvents()
        }
        else this.unbindEvents()
        if(this.parentNode && getComputedStyle(this.node).transitionDuration !== '0s') {
            if(expanded) {
                this.setAttr(Expanded.localName, '')
                this.updatePosition()
                super.expanded = false
                setTimeout(() => {
                    this.setAttr(Expanded.localName, 'false-true')
                    setTimeout(() => super.expanded = true, 20)
                }, 20)
            }
            else {
                const handler = event => {
                    super.expanded = false
                    this.un('transitionend', handler)
                }
                this.on('transitionend', handler)
                this.setAttr(Expanded.localName, 'true-false')
            }
        }
        else {
            super.expanded = expanded
            if(document.contains(this.node)) {
                this.updatePosition()
            }
        }
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
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

Role.Menu = Menu
