import { Role } from './Role'
import { ListBox } from './ListBox'
import { Option } from './Option'
import { Select } from './Select'
import { TextBox } from './TextBox'

/**
 * @summary A composite widget containing a single-line textbox and another element,
 *  such as a listbox or grid, that can dynamically pop up to help the user
 *  set the value of the textbox.
 * @see https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
export class ComboBox extends Select {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.children = [
            this._textBox = new TextBox({
                onchange : event => event.stopPropagation(),
                oninput : event => this.onTextBoxInput(event),
                onkeydown : event => this.onTextBoxKeyDown(event),
                controls : this._listBox = new ListBox({
                    tabIndex : null,
                    expanded : false,
                    onchange : event => this.onListBoxChange(event),
                    onclick : event => this.onListBoxClick(event)
                })
            })
        ]
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this._textBox.on('click', this.onTextBoxClick, this)
        super.init(init)
    }

    /**
     * @param {FocusEvent} event
     */
    onTextBoxClick(event) {
        this.expanded = true
    }

    /**
     * @param {Event} event
     */
    onTextBoxInput(event) {
        const value = this.value.trim().toLowerCase()
        if(value.length) {
            if(this.autoComplete === 'list') {
                const filtered = this.options.filter(option => {
                    const result = option.textContent.toLowerCase().includes(value)
                    option.hidden = !result
                    return result
                })
                if(filtered.length) {
                    filtered[0].selected = true
                    this.expanded = true
                }
                else this.expanded = false
            }
        }
        else {
            if(this.autoComplete === 'list') {
                this.options.forEach(option => option.hidden = false)
            }
            this._listBox.value = ''
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onTextBoxKeyDown(event) {
        const key = event.key
        switch(key) {
            case 'Enter':
                this.onEnterKeyDown(event)
                break
            case 'Escape':
                this.onEscapeKeyDown(event)
                break
            default:
                if(['ArrowUp', 'ArrowDown'].includes(key)) {
                    this.onArrowKeyDown(event)
                }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        event.preventDefault()
        if(this.options.length) {
            this.expanded = true
            this._listBox.onArrowKeyDown(event)
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        if(!this.ownerElement.contains(event.target)) {
            this.expanded = false
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        if(!this.contains(event.target)) {
            this.expanded = false
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        event.preventDefault()
        event.stopPropagation()
        this.value = this._listBox.selectedOptions.map(({ textContent }) => textContent).join()
        this.expanded = false
        this.emit('change', { bubbles : true })
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.value) {
            event.stopPropagation()
            this.value = ''
        }
        else if(this.expanded) {
            event.stopPropagation()
            this.expanded = false
        }
        this.options.forEach(option => option.hidden = false)
    }

    /**
     * @param {Event} event
     */
    onListBoxChange(event) {
        event.stopPropagation()
        const listBox = this._listBox
        this._textBox.activeDescendant = listBox.activeDescendant
        this.value = listBox.selectedOptions.map(({ textContent }) => textContent).join()
    }

    /**
     * @param {MouseEvent} event
     */
    onListBoxClick(event) {
        this._textBox.focus()
        this.value = this._listBox.selectedOptions.map(({ textContent }) => textContent).join()
        this.expanded = false
        this.emit('change', { bubbles : true })
    }

    /**
     * @param {string} autoComplete
     */
    set autoComplete(autoComplete) {
        this._textBox.autoComplete = autoComplete
    }

    /**
     * @returns {string}
     */
    get autoComplete() {
        return this._textBox.autoComplete
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this._textBox.disabled = disabled
        this._listBox.disabled = disabled
        super.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {boolean} expanded
     */
    set expanded(expanded) {
        const listBox = this._listBox
        if(super.expanded = expanded) {
            listBox.parentNode || this.append(listBox)
            if(listBox.options.some(({ hidden }) => !hidden)) {
                listBox.expanded = true
            }
            this.ownerDocument.on('click', this.onDocumentClick, this)
            this.ownerDocument.on('focusin', this.onDocumentFocusIn, this)
        }
        else {
            listBox.expanded = false
            this._textBox.activeDescendant = null
            this.ownerDocument.un('click', this.onDocumentClick, this)
            this.ownerDocument.un('focusin', this.onDocumentFocusIn, this)
        }
    }

    /**
     * @returns {boolean}
     */
    get expanded() {
        return super.expanded || false
    }

    /**
     * @param {string} hasPopup
     */
    set hasPopup(hasPopup) {
        super.hasPopup = hasPopup
    }

    /**
     * @returns {string}
     */
    get hasPopup() {
        return super.hasPopup || 'listbox'
    }

    /**
     * @param {boolean|string} invalid
     */
    set invalid(invalid) {
        super.invalid = this._textBox.invalid = invalid
    }

    /**
     * @returns {boolean|string}
     */
    get invalid() {
        return super.invalid
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this._textBox.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return this._textBox.label
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._textBox.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._textBox.name
    }

    /**
     * @param {*} options
     */
    set options(options) {
        this._listBox.options = options
    }

    /**
     * @returns {Option[]}
     */
    get options() {
        return this._listBox.options
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this._textBox.required = required
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this._textBox.required
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this._textBox.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this._textBox.value
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.ComboBox = ComboBox
