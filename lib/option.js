import { Input } from './input'
import { Listbox } from './listbox'
import { Checked } from './aria/checked'
import { Selected } from './aria/selected'

/**
 * @summary A selectable item in a select list.
 * @see https://www.w3.org/TR/wai-aria-1.1/#option
 */
export class Option extends Input {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('click', this.onClick.bind(this))
        this.on('mouseenter', this.onMouseEnter.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        this.on('mousemove', this.onMouseMove.bind(this))
        this.selected = false
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else if(this.checked !== undefined && !this.listbox.readOnly) {
            const listbox = this.listbox
            const value = listbox.value
            if(!listbox.multiselectable) {
                listbox.options.forEach(option => {
                    if(option !== this) {
                        option.checked = false
                    }
                })
            }
            this.checked = !this.checked
            if(listbox.value !== value) {
                listbox.emit('change', { bubbles : true })
            }
            event.stopPropagation()
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseEnter(event) {
        const { buttons } = event
        if(this.multiselectable && buttons === 1) {
            this.selected = true
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        const listbox = this.listbox
        if(!this.disabled && (listbox.checkable || !listbox.readOnly)) {
            if((event.metaKey || event.ctrlKey || event.shiftKey)
                && this.listbox.multiselectable) {
                void null
            }
            else {
                this.listbox.options.forEach(option => {
                    option.selected = false
                })
            }
            this.selected = true
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        if(this.listbox.multiselectable && event.buttons === 1) {
            this.selected = true
        }
    }

    /**
     * @param {boolean|string|undefined} checked
     */
    set checked(checked) {
        this.setAttribute(Checked, checked)
        if(this.listbox) {
            this.emit('check', { bubbles : true })
        }
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get checked() {
        return this.getAttribute(Checked)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        const listbox = this.listbox
        return listbox && listbox.disabled || super.disabled
    }

    /**
     * @returns {Listbox|*|null}
     */
    get listbox() {
        return this.closest(Listbox)
    }

    /**
     * @param {boolean|undefined} selected
     */
    set selected(selected) {
        const listbox = this.listbox
        this.setAttribute(Selected, selected)
        if(listbox && selected) {
            listbox.activeDescendant = this
            this.emit('select', { bubbles : true })
        }
    }

    /**
     * @returns {boolean|undefined}
     */
    get selected() {
        return this.getAttribute(Selected)
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this.dataset.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.dataset.value
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
 * @returns {Option}
 */
export function option(init) {
    return new Option(init)
}
