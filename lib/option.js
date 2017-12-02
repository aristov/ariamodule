import { Input } from './input'
import { Listbox } from './listbox'
import { Checked, Selected } from './aria'

export class Option extends Input {
    init(init) {
        super.init(init)
        if(!this.selected) this.selected = 'false'
        this.on('click', this.onClick.bind(this))
        this.on('mouseenter', this.onMouseEnter.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
    }

    get listbox() {
        return this.closest(Listbox)
    }

    set selected(selected) {
        const listbox = this.listbox
        this.setAttribute(Selected, selected)
        if(listbox && selected === 'true') {
            listbox.activeDescendant = this
            this.emit('select', { bubbles : true })
        }
    }

    get selected() {
        return this.getAttribute(Selected)
    }

    set checked(checked) {
        this.setAttribute(Checked, checked)
        if(this.listbox) {
            this.emit('check', { bubbles : true })
        }
    }

    get checked() {
        return this.getAttribute(Checked)
    }

    set disabled(disabled) {
        super.disabled = disabled
    }

    get disabled() {
        const listbox = this.listbox
        return listbox && listbox.disabled || super.disabled
    }

    set value(value) {
        if(value) this.dataset.value = value
        else this.removeAttribute('data-value')
    }

    get value() {
        return this.dataset.value
    }

    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else if(this.checked) {
            this.checked = String(this.checked === 'false')
        }
    }

    onMouseEnter(event) {
        const { buttons } = event
        if(this.multiselectable && buttons === 1) {
            this.selected = 'true'
        }
    }

    onMouseDown() {
        if(!this.disabled) {
            this.listbox.options.forEach(option => {
                option.selected = 'false'
            })
            this.selected = 'true'
        }
    }

    static get abstract() {
        return false
    }
}

export function option(...init) {
    return new Option(...init)
}
