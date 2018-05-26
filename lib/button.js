import { Command } from './command'
import { Form } from './form'
import { Expanded } from './aria/expanded'
import { Pressed } from './aria/pressed'

/**
 * @summary An input that allows for user-triggered actions when clicked or pressed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#button
 */
export class Button extends Command {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('blur', this.onBlur.bind(this))
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mouseleave', this.onMouseLeave.bind(this))
        this.on('mouseup', this.onMouseUp.bind(this))
        this.tabIndex = 0
        super.init(init)
    }

    /**
     * Activate an action of the button
     */
    activate() {
        const pressed = this.pressed
        if(pressed !== undefined) {
            this.pressed = pressed === false
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
     */
    onKeyUp(event) {
        if(event.key === ' ') {
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
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttribute(Expanded)
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
        this.setAttribute(Pressed, pressed)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get pressed() {
        return this.getAttribute(Pressed)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Button}
 */
export function button(init) {
    return new Button(init)
}
