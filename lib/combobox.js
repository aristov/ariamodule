import { Expanded } from './aria'
import { Select } from './select'
import { Textbox } from './textbox'
import { Button } from './button'
import { Listbox } from './listbox'
import { Option } from './option'

export class Combobox extends Select {
    init(init) {
        this.children = [
            new Textbox({
                onkeydown : this.onTextBoxKeyDown.bind(this),
                oninput : this.onTextBoxInput.bind(this),
                onclick : this.onTextBoxClick.bind(this)
            }),
            new Button({
                tabIndex : -1,
                onclick : this.onButtonClick.bind(this),
                innerHTML : '&nbsp;'
            }),
            new Listbox({
                tabIndex : NaN,
                classList : 'popup',
                onchange : this.onListBoxChange.bind(this),
                onclick : this.onListBoxClick.bind(this)
            })
        ]
        this.expanded = 'false'
        super.init(init)
    }

    clear() {
        this.listbox.options.forEach(option => option.remove())
    }

    onTextBoxInput() {
        const value = this.value.trim()
        const regexp = new RegExp('^' + value, 'i')
        if(value.length) {
            const filtered = this.options.filter(({ textContent }) => {
                return regexp.test(textContent)
            })
            if(filtered.length) {
                const regexp = new RegExp(`^${ value }$`, 'i')
                this.rebuild(filtered)
                this.listbox.options.forEach(opt => {
                    if(regexp.test(opt.textContent)) opt.selected = 'true'
                    return opt
                })
                this.invalid = 'false'
            }
            else {
                this.rebuild()
                this.invalid = 'true'
            }
            this.expanded = 'true'
        }
        else {
            this.rebuild()
            this.invalid = 'false'
            this.listbox.value = ''
        }
    }

    onTextBoxClick() {
        this.textbox.readOnly && this.toggle()
    }

    onTextBoxKeyDown(event) {
        const key = event.key
        const textbox = this.textbox
        switch(key) {
            case 'Escape':
                this.onEscapeKeyDown(event)
                break
            case 'Enter':
                this.onEnterKeyDown(event)
                break
            case ' ':
                if(textbox.readOnly) this.toggle()
                break
            case 'Tab':
                this.expanded = 'false'
                break
            default:
                if(['ArrowUp', 'ArrowDown'].includes(key)) {
                    this.onArrowKeyDown(event)
                }
                else if(!event.metaKey && textbox.readOnly) {
                    event.preventDefault()
                }
        }
    }

    onArrowKeyDown(event) {
        const listbox = this.listbox
        this.expanded = 'true'
        listbox.onKeyDown(event)
        event.preventDefault()
    }

    onButtonClick() {
        this.textbox.focus()
        this.toggle()
    }

    onDocumentClick({ target }) {
        if(!this.ownerElement.contains(target)) {
            this.expanded = 'false'
        }
    }

    onDocumentFocus({ target }) {
        if(!this.ownerElement.contains(target) || this.listbox._box.node === target) {
            this.expanded = 'false'
        }
    }

    onEnterKeyDown() {
        this.value = this.listbox.text
        this.toggle()
        this.invalid = 'false'
    }

    onEscapeKeyDown() {
        if(this.value) {
            this.value = ''
            this.clear()
        }
        else this.expanded = 'false'
        this.rebuild()
        this.invalid = 'false'
    }

    onListBoxChange() {
        const listbox = this.listbox
        this.value = listbox.text
        this.activeDescendant = listbox.activeDescendant
        this.invalid = 'false'
    }

    onListBoxClick() {
        this.textbox.focus()
        this.expanded = 'false'
        // this.invalid = 'false'
    }

    rebuild(options = this.options) {
        this.clear()
        this.listbox.options = options.map(opt => new Option(opt))
    }

    toggle() {
        this.expanded = String(this.expanded === 'false')
    }

    get button() {
        return this.find(Button)
    }

    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
        if(expanded === 'true' && !this.listbox.options.length) {
            this.rebuild()
        }
    }

    get expanded() {
        return this.getAttribute(Expanded)
    }

    set invalid(invalid) {
        if(invalid !== this.invalid) {
            super.invalid = invalid
            if(invalid === 'true') this.rebuild()
        }
    }

    get invalid() {
        return super.invalid
    }

    get listbox() {
        return this.find(Listbox)
    }

    set options(options) {
        this.dataset.options = JSON.stringify(options)
    }

    get options() {
        return JSON.parse(this.dataset.options)
    }

    set parentNode(parentNode) {
        super.parentNode = parentNode
        this.ownerDocument.on('click', this.onDocumentClick.bind(this))
        this.ownerDocument.on('focus', this.onDocumentFocus.bind(this), true)
    }

    get parentNode() {
        return super.parentNode
    }

    get textbox() {
        return this.find(Textbox)
    }

    set value(value) {
        this.textbox.value = value
    }

    get value() {
        return this.textbox.value
    }

    static get abstract() {
        return false
    }
}
