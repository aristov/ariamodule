import { Span } from 'htmlmodule'
import { Input } from './input'
import { Checked, ReadOnly } from './aria'

export class Checkbox extends Input {
    /**
     * @param {*} init
     */
    init(init) {
        this.tabIndex = 0
        this.checked = 'false'
        this.on('click', this.onClick.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mouseup', this.onMouseUp.bind(this))
        this.on('blur', () => this.active = false)
        this.on('mouseleave', () => this.active = false)
        super.init(init)
    }

    /**
     * Activate the checkbox
     */
    activate() {
        this.checked = String(this.checked === 'false')
        this.emit('change', { bubbles : true, cancelable : true })
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
        if(event.key === ' ') {
            event.preventDefault()
            if(!event.repeat) this.active = true
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.emit('click', { bubbles : true, cancelable : true })
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
     * @param {String} checked
     */
    set checked(checked) {
        this.setAttribute(Checked, checked)
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(Checked)
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = [new Span({ className : 'box' }), children]
    }

    /**
     * @returns {Array}
     */
    get children() {
        return super.children
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.dataset.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.dataset.value
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
 * @returns {Checkbox}
 */
export function checkbox(...init) {
    return new Checkbox(...init)
}
