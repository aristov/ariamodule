import { Command } from './command'
import { Form } from './form'
import { Expanded } from './aria/expanded'
import { Pressed } from './aria/pressed'

const DEFAULT_TABINDEX_VALUE = 0

/**
 * @summary An input that allows for user-triggered actions when clicked or pressed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#button
 */
export class Button extends Command {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.on('blur', this.onBlur.bind(this))
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mouseleave', this.onMouseLeave.bind(this))
        this.on('mouseup', this.onMouseUp.bind(this))
    }

    /**
     * @param {{}} init
     * @param {number|null} [init.tabIndex]
     */
    assign(init) {
        this.tabIndex = 'tabIndex' in init?
            init.tabIndex :
            DEFAULT_TABINDEX_VALUE
        super.assign(init)
    }

    /**
     * Activate an action of the button
     */
    activate() {
        const pressed = this.pressed
        if(pressed) {
            this.pressed = String(pressed === 'false')
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
        else this.activate()
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
            if(!event.repeat) {
                this.active = true
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            if(this.active) {
                this.click()
            }
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
     * @param {string} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {string}
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
     * @param {string} pressed
     */
    set pressed(pressed) {
        this.setAttribute(Pressed, pressed)
    }

    /**
     * @returns {string}
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
