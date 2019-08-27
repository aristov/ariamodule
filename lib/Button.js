import { Role } from './Role'
import { Command } from './Command'
import { Dialog } from './Dialog'
import { Form } from './Form'
import { Menu } from './Menu'
import { Expanded } from './aria/Expanded'
import { Pressed } from './aria/Pressed'

let undefined

/**
 * @summary An input that allows for user-triggered actions when clicked or pressed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#button
 */
export class Button extends Command {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.tabIndex = 0
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('blur', this.onBlur)
        this.on('click', this.onClick)
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        this.on('mousedown', this.onMouseDown)
        this.on('mouseleave', this.onMouseLeave)
        this.on('mouseup', this.onMouseUp)
        super.init(init)
    }

    /**
     * Activate an action of the button
     */
    activate() {
        const pressed = this.pressed
        const expanded = this.expanded
        if(pressed !== undefined) {
            this.pressed = !pressed
        }
        if(expanded !== undefined) {
            this.expanded = !expanded
        }
        if(this.hasPopup === 'dialog') {
            const dialog = this.dialog
            if(dialog) {
                if(!dialog.trigger) {
                    dialog.trigger = this
                }
                dialog.expanded = !dialog.expanded
            }
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onBlur(event) {
        this.active = false
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else if(!event.defaultPrevented) {
            this.activate()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        switch(event.key) {
            case ' ':
                this.onSpaceKeyDown(event)
                break
            case 'Enter':
                this.onEnterKeyDown(event)
                break
            case 'ArrowUp':
                this.onArrowUpKeyDown(event)
                break
            case 'ArrowDown':
                this.onArrowDownKeyDown(event)
                break
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowUpKeyDown(event) {
        if(this.hasPopup === 'menu') {
            const menu = this.menu
            if(menu) {
                event.preventDefault()
                const items = menu.items.filter(({ disabled }) => !disabled)
                if(!this.expanded) {
                    this.expanded = true
                }
                items[items.length - 1].focus()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        if(this.hasPopup === 'menu') {
            const menu = this.menu
            if(menu) {
                event.preventDefault()
                if(!this.expanded) {
                    this.expanded = true
                }
                menu.items.filter(({ disabled }) => !disabled)[0].focus()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        this.click()
        if(this.hasPopup === 'menu') {
            const menu = this.menu
            if(menu) {
                const item = menu.items.filter(({ disabled }) => !disabled)[0]
                item && item.focus()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        event.preventDefault()
        this.active = true
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.onSpaceKeyUp(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyUp(event) {
        if(this.active) {
            this.active = false
            this.click()
            if(this.hasPopup === 'menu') {
                const menu = this.menu
                if(menu) {
                    const item = menu.items.filter(({ disabled }) => !disabled)[0]
                    item && item.focus()
                }
            }
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.disabled) {
            this.active = true
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onMouseLeave(event) {
        this.active = false
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        this.active = false
    }

    /**
     * @param {boolean} active
     */
    set active(active) {
        this.classList.toggle('active', active)
    }

    /**
     * @returns {boolean}
     */
    get active() {
        return this.classList.contains('active')
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        super.controls = controls
        const dialog = this.dialog
        const menu = this.menu
        if(dialog) {
            dialog.trigger = this
            this.hasPopup = 'dialog'
            // this.expanded = false
        }
        if(menu) {
            menu.trigger = this
            this.hasPopup = 'menu'
            this.expanded = false
        }
    }

    /**
     * @returns {*[]}
     */
    get controls() {
        return super.controls
    }

    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        if(this.hasPopup === 'menu') {
            const menu = this.menu
            if(menu) {
                menu.expanded = expanded
            }
        }
        if(this.hasPopup === 'dialog') {
            const dialog = this.dialog
            if(dialog) {
                dialog.expanded = expanded
            }
        }
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @returns {Dialog|*|null}
     */
    get dialog() {
        return this.controls.filter(instance => instance instanceof Dialog)[0] || null
    }

    /**
     * @returns {Form|*|null}
     */
    get form() {
        return this.closest(Form)
    }

    /**
     * @returns {Menu|*|null}
     */
    get menu() {
        return this.controls.filter(instance => instance instanceof Menu)[0] || null
    }

    /**
     * @param {boolean|string|undefined} pressed
     */
    set pressed(pressed) {
        this.setAttr(Pressed, pressed)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get pressed() {
        return this.getAttr(Pressed)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.Button = Button
