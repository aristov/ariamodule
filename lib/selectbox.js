// uimodule
import { Label } from 'htmlmodule/lib/label'
import { Select } from './select'
import { Option } from './option'
import { Button } from './button'
import { ListBox } from './listbox'
import { Expanded } from './aria/expanded'
import { ReadOnly } from './aria/readonly'

export class SelectBox extends Select { // todo extends Combobox
    /**
     * @param {*} [init]
     */
    init(init) {
        this.children = [
            this._button = new Button({
                hasPopup : 'listbox',
                onclick : this.onButtonClick.bind(this)
            }),
            this._listbox = new ListBox({
                tabIndex : null,
                classList : 'popup',
                onchange : this.onListBoxChange.bind(this)
            })
        ]
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
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
        const expanded = this.expanded
        if(expanded) {
            if(!this.multiselectable || !this.find(Option, ({ checked }) => checked !== undefined)) {
                this.expanded = false
            }
        }
        else this.expanded = true
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        const target = event.target
        if(!this.contains(target)) {
            this.expanded = false
        }
        if(this.listbox.contains(target)) {
            if(this.multiselectable) {
                this.focus()
            }
            else {
                this.expanded = false
                this.focus()
            }
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocus(event) {
        if(!this.contains(event.target)) {
            this.expanded = false
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Enter') {
            event.stopPropagation()
        }
        if(key === 'Escape' && this.expanded) {
            event.stopPropagation()
            this.expanded = false
        }
        else if(key === ' ' && !event.repeat) {
            this.onSpaceKeyDown(event)
        }
        else if(key.startsWith('Arrow')) {
            event.preventDefault()
            if(!this.expanded) {
                this.expanded = true
            }
            else this.listbox.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            if(!this.expanded || this.multiselectable) {
                this.listbox.onSpaceKeyUp(event)
            }
        }
    }

    /**
     * @param {CustomEvent} event
     */
    onListBoxChange(event) {
        event.stopPropagation()
        const options = this.listbox.selectedOptions
        this.button.textContent = options.length?
            options.map(option => option.textContent).join() :
            '—'
        this.emit('change', { bubbles : true, detail : event.detail })
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        if(this.expanded && this.find(Option, ({ checked }) => checked !== undefined)) {
            this.listbox.onSpaceKeyDown(event)
        }
    }

    /**
     * @returns {Button}
     */
    get button() {
        return this._button
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.button.disabled = disabled
        this.listbox.disabled = disabled
        super.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        const doc = this.ownerDocument
        if(expanded) {
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
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.hasAttribute(Expanded)?
            this.getAttribute(Expanded) :
            false
    }

    /**
     * @param {string} label
     */
    set label(label) {
        const labelledBy = this.labelledBy[0]
        if(labelledBy) {
            labelledBy.textContent = label
        }
        else {
            this.prepend(this.labelledBy = new Label({
                onclick : event => this.focus(),
                children : label
            }))
        }
    }

    /**
     * @returns {string}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @returns {ListBox}
     */
    get listbox() {
        return this._listbox
    }

    /**
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.listbox.multiselectable = multiselectable
    }

    /**
     * @returns {boolean}
     */
    get multiselectable() {
        return this.listbox.multiselectable
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.listbox.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.listbox.name
    }

    /**
     * @param {Option[]} options
     */
    set options(options) {
        const listbox = this.listbox
        listbox.options = options
        const option = this.find(Option, ({ checked }) => checked !== undefined)?
            listbox.find(Option, ({ checked }) => checked) :
            listbox.selectedOptions[0]
        this.text = option? option.textContent : '—'
    }

    /**
     * @returns {Option[]}
     */
    get options() {
        return this.listbox.options
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.listbox.readOnly = readOnly
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {string} text
     */
    set text(text) {
        this.button.textContent = text
    }

    /**
     * @returns {string}
     */
    get text() {
        return this.button.textContent
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this.listbox.options.forEach(option => {
            option.selected = option.value === value
        })
        this.listbox.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.listbox.value
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
 * @returns {SelectBox}
 */
export function selectbox(init) {
    return new SelectBox(init)
}
