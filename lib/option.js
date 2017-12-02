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
        if(listbox && selected === 'true') {
            listbox.activeDescendant = this
            if(!this.checked) listbox.value = this.value
        }
        this.setAttribute(Selected, selected)
    }

    get selected() {
        return this.getAttribute(Selected)
    }

    set checked(checked) {
        this.setAttribute(Checked, checked)
        if(this.listbox) {
            this.listbox.value = this.value
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
        this.dataset.value = value
    }

    get value() {
        return this.dataset.value
    }

    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else if(this.checked) {
            this.listbox.checkedOptions = this.checked === 'false'?
                [this] :
                []
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
