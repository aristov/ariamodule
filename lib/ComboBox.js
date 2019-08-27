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

    update() {
        const { selectedOptions } = this._listBox
        if(selectedOptions.length) {
            this._textBox.value = selectedOptions.map(({ textContent }) => textContent).join()
            this.dataset.value = selectedOptions.map(({ value }) => value).join()
        }
    }

    reset() {
        this.options.forEach(option => {
            option.hidden = option.selected = false
        })
        this._listBox.activeDescendant = this.options[0]
    }

    filter() {
        const value = this._textBox.value.toLowerCase()
        return this.options.filter(option => {
            const result = option.textContent.toLowerCase().includes(value)
            option.hidden = !result
            return result
        })
    }

    /**
     * Focus the widget
     */
    focus() {
        this._textBox.focus()
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
        delete this.dataset.value
        if(this.autoComplete === 'list') {
            if(this._textBox.value) {
                const options = this.filter()
                if(options.length) {
                    options[0].selected = true
                    this.expanded = true
                }
                else this.expanded = false
            }
            else this.reset()
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
            if(this.expanded) {
                this._listBox.onArrowKeyDown(event)
            }
            else this.expanded = true
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
        if(this.expanded) {
            this.update()
            this.expanded = false
            this.emit('change', { bubbles : true })
        }
        else this.expanded = true
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        event.stopPropagation()
        if(this.expanded) {
            this.expanded = false
        }
        else if(this.value) {
            this.value = ''
            this.emit('change', { bubbles : true })
            this.reset()
        }
        else if(this._textBox.value) {
            this._textBox.value = ''
            this.reset()
        }
    }

    /**
     * @param {Event} event
     */
    onListBoxChange(event) {
        event.stopPropagation()
        const listBox = this._listBox
        this._textBox.activeDescendant = listBox.activeDescendant
    }

    /**
     * @param {MouseEvent} event
     */
    onListBoxClick(event) {
        this._textBox.focus()
        this.update()
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
        if(expanded === this.expanded) return
        const listBox = this._listBox
        if(super.expanded = expanded) {
            listBox.parentNode || this.append(listBox)
            if(this.value) {
                this.options.forEach(option => option.hidden = false)
            }
            if(this.options.some(({ hidden }) => !hidden)) {
                const { activeDescendant } = listBox
                listBox.expanded = true
                if(activeDescendant) {
                    listBox.scrollTo(activeDescendant)
                }
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
     * @returns {Option[]}
     */
    get selectedOptions() {
        return this._listBox.selectedOptions
    }

    /**
     * @param {string} value
     */
    set value(value) {
        const options = this.options.filter(({ value : v }) => v === value)
        this._textBox.value = options.map(({ textContent }) => textContent).join()
        if(value) {
            this.dataset.value = value
        }
        else delete this.dataset.value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.dataset.value || ''
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.ComboBox = ComboBox
