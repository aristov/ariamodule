import { Span } from 'htmlmodule'
import { Label } from 'htmlmodule/lib/index'
import { Select } from './select'
import { Option } from './option'
import { Button } from './button'
import { Listbox } from './listbox'
import { Expanded } from './aria'

export class Selectbox extends Select {
    /**
     * @param {*} [init]
     */
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

    /**
     * Focus the selectbox
     */
    focus() {
        this.button.focus()
    }

    /**
     * @param {MouseEvent} event
     */
    onButtonClick(event) {
        this.expanded = String(this.expanded === 'false')
    }

    /**
     * @param {MouseEvent} event
     */
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

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocus(event) {
        if(!this.contains(event.target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Escape') {
            event.stopPropagation()
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

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            if(this.expanded === 'false') {
                this.listbox.onSpaceKeyUp(event)
                this.expanded = 'false'
            }
        }
    }

    /**
     * @param {CustomEvent} event
     */
    onListBoxChange(event) {
        this.button.textContent = this.listbox.text || '—'
    }

    /**
     * @param event
     */
    onSpaceKeyDown(event) {
        if(this.expanded === 'true' && this.find(Option, '[aria-checked]')) {
            this.listbox.onSpaceKeyDown(event)
        }
    }

    /**
     * @returns {Button|null}
     */
    get button() {
        return this.find(Button)
    }

    /**
     * @param {String} expanded
     */
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

    /**
     * @returns {String}
     */
    get expanded() {
        return this.hasAttribute(Expanded)?
            this.getAttribute(Expanded) :
            'false'
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const instance = this.labelledBy[0]
        if(instance) instance.textContent = label
        else {
            const instance = new Label({
                id : this.id + '-label',
                onclick : () => this.focus(),
                children : label
            })
            this.labelledBy = [instance]
            this.ownerElement.prepend(instance)
        }
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @returns {Listbox|null}
     */
    get listbox() {
        return this.find(Listbox)
    }

    /**
     * @param {Option[]} options
     */
    set options(options) {
        const listbox = this.listbox
        listbox.options = options
        const option = this.find(Option, '[aria-checked]')?
            listbox.checkedOption :
            listbox.selectedOption || options[0]
        this.text = option? option.textContent : '—'
    }

    /**
     * @returns {Option[]}
     */
    get options() {
        return this.listbox.options
    }

    /**
     * @param {String} text
     */
    set text(text) {
        this.button.textContent = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.button.textContent
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.listbox.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.listbox.value
    }

    /**
     * @returns {Boolean}
     */
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

/**
 * @param {...*} [init]
 * @returns {Selectbox}
 */
export function selectbox(...init) {
    return new Selectbox(...init)
}
