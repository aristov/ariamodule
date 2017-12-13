import { Span } from 'htmlmodule'
import { Select } from './select'
import { Option } from './option'
import { Button } from './button'
import { Listbox } from './listbox'
import { Expanded } from './aria'

export class Selectbox extends Select {
    init(init) {
        this.children = [
            new Button,
            new Listbox({
                classList : 'popup',
                tabIndex : NaN
            })
        ]
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.button.on('click', this.onButtonClick.bind(this))
        this.listbox.on('change', this.onListBoxChange.bind(this))
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
        super.init(init)
    }

    focus() {
        this.button.focus()
    }

    onButtonClick(event) {
        this.expanded = String(this.expanded === 'false')
    }

    onDocumentClick(event) {
        const target = event.target
        if(!this.contains(target)) {
            this.expanded = 'false'
        }
        if(this.listbox.contains(target)) {
            this.expanded = 'false'
            this.focus()
        }
    }

    onDocumentFocus({ target }) {
        if(!this.contains(target)) {
            this.expanded = 'false'
        }
    }

    onKeyDown(event) {
        const key = event.key
        if(key === 'Escape') {
            this.expanded = 'false'
        }
        else if(key === ' ' && !event.repeat) {
            this.onSpaceKeyDown(event)
        }
        else if(key.startsWith('Arrow')) {
            event.preventDefault()
            if(this.expanded === 'false') {
                this.expanded = 'true'
            }
            else this.listbox.onArrowKeyDown(event)
        }
    }

    onKeyUp(event) {
        if(event.key === ' ') {
            if(this.expanded === 'false') {
                // console.log(event)
                this.listbox.onSpaceKeyUp(event)
                this.expanded = 'false'
            }
            /*else {
                // this.classList.remove('active')
                this.emit('click')
            }*/
        }
    }

    onListBoxChange(event) {
        // console.log(event)
        this.button.textContent = this.listbox.text || '—'
    }

    onSpaceKeyDown(event) {
        // const listbox = this.listbox
        if(this.expanded === 'true' && this.find(Option, '[aria-checked]')) {
            this.listbox.onSpaceKeyDown(event)
        }
        // else this.classList.add('active')
    }

    get button() {
        return this.find(Button)
    }

    set expanded(expanded) {
        const doc = this.ownerDocument
        if(expanded === 'true') {
            const listbox = this.listbox
            if(!listbox.selectedOption) {
                listbox.options[0].selected = 'true'
            }
            doc.on('click', this.onDocumentClick)
            doc.on('focus', this.onDocumentFocus, true)
        }
        else {
            doc.un('click', this.onDocumentClick)
            doc.un('focus', this.onDocumentFocus, true)
        }
        this.setAttribute(Expanded, expanded)
    }

    get expanded() {
        return this.hasAttribute(Expanded)?
            this.getAttribute(Expanded) :
            'false'
    }

    get listbox() {
        return this.find(Listbox)
    }

    set options(options) {
        const listbox = this.listbox
        listbox.options = options
        const isCheckable = this.find(Option, '[aria-checked]')
        const option = isCheckable?
            listbox.checkedOption :
            listbox.selectedOption || options[0]
        this.text = option? option.textContent : '—'
    }

    get options() {
        return this.listbox.options
    }

    set text(text) {
        this.button.textContent = text
    }

    get text() {
        return this.button.textContent
    }

    set value(value) {
        this.listbox.value = value
    }

    get value() {
        return this.listbox.value
    }

    static get abstract() {
        return false
    }

    /**
     * @returns {Function} Span
     */
    static get elementAssembler() {
        return Span
    }
}

export function selectbox(...init) {
    return new Selectbox(...init)
}
