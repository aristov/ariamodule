import { Span } from 'htmlmodule'
import { Command } from './command'
import { Expanded } from './aria'
import { Pressed } from './aria'

const DEFAULT_TABINDEX_VALUE = 0

export class Button extends Command {
    /**
     * @param {*} init
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
        if(this.pressed) {
            this.pressed = String(this.pressed === 'false')
        }
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
        const { key, repeat } = event
        if(key === 'Enter') {
            this.emit('click', {
                bubbles : true,
                cancelable : true
            })
        }
        else if(key === ' ') {
            event.preventDefault()
            if(!repeat) this.active = true
        }
    }

    /**
     * @param {String} key
     */
    onKeyUp({ key }) {
        if(key === ' ') {
            if(this.active) {
                this.emit('click', {
                    bubbles : true,
                    cancelable : true
                })
            }
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

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Span
    }
}

/**
 * @param {*} init
 * @returns {Button}
 */
export function button(...init) {
    return new Button(...init)
}
