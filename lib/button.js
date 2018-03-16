import { Command } from './command'
import { Form } from './form'
import { Expanded, Pressed } from './aria'

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
        const isObject = init && init.constructor === Object
        this.tabIndex = isObject && 'tabIndex' in init?
            init.tabIndex :
            DEFAULT_TABINDEX_VALUE
        this.on('click', event => this.onClick(event))
        this.on('keydown', event => this.onKeyDown(event))
        this.on('keyup', event => this.onKeyUp(event))
        this.on('mousedown', event => this.onMouseDown(event))
        this.on('mouseup', event => this.onMouseUp(event))
        this.on('blur', () => this.active = false)
        this.on('mouseleave', () => this.active = false)
        super.init(init)
    }

    /**
     * Activate the button
     */
    activate() {
        this.emit('activate')
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) event.stopImmediatePropagation()
        else this.activate()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Enter') this.ownerElement.click()
        else if(key === ' ') {
            event.preventDefault()
            if(!event.repeat) this.active = true
        }
    }

    /**
     * @param {String} key
     */
    onKeyUp({ key }) {
        if(key === ' ') {
            if(this.active) this.ownerElement.click()
            this.active = false
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(!this.disabled) this.active = true
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        if(!this.disabled) this.active = false
    }

    /**
     * @param {Boolean} active
     */
    set active(active) {
        this.classList.toggle('active', active)
    }

    /**
     * @returns {Boolean}
     */
    get active() {
        return this.classList.contains('active')
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {String}
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
     * @param {String} pressed
     */
    set pressed(pressed) {
        this.setAttribute(Pressed, pressed)
    }

    /**
     * @returns {String}
     */
    get pressed() {
        return this.getAttribute(Pressed)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} init
 * @returns {Button}
 */
export function button(...init) {
    return new Button(...init)
}
