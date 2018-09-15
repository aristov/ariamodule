import { Command } from './Command'
import { Form } from './Form'
import { Dialog } from './Dialog'
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
    init(init) {
        this.on('blur', this.onBlur)
        this.on('click', this.onClick)
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        this.on('mousedown', this.onMouseDown)
        this.on('mouseleave', this.onMouseLeave)
        this.on('mouseup', this.onMouseUp)
        this.tabIndex = 0
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
            this.controls.forEach(dialog => {
                if(!dialog.trigger) {
                    dialog.trigger = this
                }
                dialog.expanded = !dialog.expanded
            })
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
        const key = event.key
        if(key === 'Enter') {
            this.click()
        }
        else if(key === ' ') {
            event.preventDefault()
            this.active = true
        }
    }

    /**
     * @param {KeyboardEvent} event
     * fixme check if KeyDown was pressed before
     */
    onKeyUp(event) {
        if(event.key === ' ' && this.active) {
            this.click()
            this.active = false
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
        this.controls.forEach(instance => {
            if(instance instanceof Dialog) {
                if(!instance.trigger) {
                    instance.trigger = this
                }
                if(!this.hasPopup) {
                    this.hasPopup = 'dialog'
                }
            }
        })
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
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(Form)
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

/**
 * @param {{}} init
 * @returns {Button}
 */
export function button(init) {
    return new Button(init)
}