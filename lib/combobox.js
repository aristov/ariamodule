import { ActiveDescendant } from './aria/activedescendant'
import { Expanded } from './aria/expanded'
import { HasPopup } from './aria/haspopup'
import { ReadOnly } from './aria/readonly'
import { Select } from './select'
import { TextBox } from './textbox'
import { Button } from './button'
import { ListBox } from './listbox'
import { Option } from './option'

/**
 * @summary A composite widget containing a single-line textbox and another element,
 *  such as a listbox or grid, that can dynamically pop up to help the user
 *  set the value of the textbox.
 * @see https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
export class ComboBox extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.children = [
            this._textbox = new TextBox({
                onkeydown : event => this.onTextBoxKeyDown(event),
                oninput : event => this.onTextBoxInput(event),
                onclick : event => this.onTextBoxClick(event)
            }),
            this._button = new Button({
                tabIndex : null,
                onclick : event => this.onButtonClick(event),
                innerHTML : '&nbsp;'
            }),
            this._listbox = new ListBox({
                tabIndex : null,
                expanded : false,
                onchange : event => this.onListBoxChange(event),
                onclick : event => this.onListBoxClick(event)
            })
        ]
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
        super.init(init)
    }

    /**
     * Clear the listbox
     */
    clear() {
        this.listbox.options.forEach(option => option.remove())
    }

    /**
     * @param {Event} event
     */
    onTextBoxInput(event) {
        const value = this.value.trim()
        const regexp = new RegExp(value, 'i')
        if(value.length) {
            const filtered = this.options.filter(({ textContent }) => {
                return regexp.test(textContent)
            })
            if(filtered.length) {
                const regexp = new RegExp(`^${ value }$`, 'i')
                this.rebuild(filtered)
                this.listbox.options.forEach(opt => {
                    if(regexp.test(opt.textContent)) {
                        opt.selected = true
                    }
                    return opt
                })
                this.invalid = 'false' // fixme
            }
            else {
                this.rebuild()
                this.invalid = 'true'
            }
            this.expanded = true
        }
        else {
            this.rebuild()
            this.invalid = 'false'
            this.listbox.value = ''
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onTextBoxClick(event) {
        if(this.textbox.readOnly) {
            this.toggle()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
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
                if(textbox.readOnly) {
                    this.toggle()
                }
                break
            case 'Tab':
                this.expanded = false
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
    
    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const listbox = this.listbox
        this.expanded = true
        listbox.onKeyDown(event)
        event.preventDefault()
    }

    /**
     * @param {MouseEvent} event
     */
    onButtonClick(event) {
        this.textbox.focus()
        this.toggle()
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
    onDocumentFocus(event) {
        if(!this.ownerElement.contains(event.target)) {
            this.expanded = false
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        event.stopPropagation()
        const option = this.listbox.selectedOptions[0]
        this.value = option? option.textContent : ''
        this.toggle()
        this.invalid = 'false'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.value) {
            event.stopPropagation()
            this.value = ''
            this.clear()
        }
        else if(this.expanded) {
            event.stopPropagation()
            this.expanded = false
        }
        this.rebuild()
        this.invalid = 'false'
    }

    /**
     * @param {Event} event
     */
    onListBoxChange(event) {
        const listbox = this.listbox
        const option = listbox.selectedOptions[0]
        this.value = option? option.textContent : ''
        this.activeDescendant = listbox.activeDescendant
        this.invalid = 'false'
    }

    /**
     * @param {MouseEvent} event
     */
    onListBoxClick(event) {
        this.textbox.focus()
        this.expanded = false
    }

    /**
     * @param {{ textContent }[]} options
     */
    rebuild(options = this.options) {
        this.clear()
        this.listbox.options = options.map(opt => new Option(opt))
    }

    /**
     * Remove the combobox
     */
    remove() {
        this.ownerDocument.un('click', this.onDocumentClick)
        this.ownerDocument.un('focus', this.onDocumentFocus, true)
        super.remove()
    }

    /**
     * Toggle the expanded state
     */
    toggle() {
        this.expanded = !this.expanded
    }

    /**
     * @param {Option|null} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {Option|null}
     */
    get activeDescendant() {
        return this.getAttr(ActiveDescendant)
    }

    /**
     * 
     * @returns {Button}
     */
    get button() {
        return this._button
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.textbox.disabled = disabled
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
        this.setAttr(Expanded, this.listbox.expanded = expanded)
        if(expanded && !this.listbox.options.length) {
            this.rebuild()
        }
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.hasAttr(Expanded)?
            this.getAttr(Expanded) :
            false
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
        return this.hasAttr(HasPopup)?
            super.hasPopup :
            'listbox'
    }

    /**
     * @param {string} invalid
     */
    set invalid(invalid) {
        if(invalid !== this.invalid) {
            super.invalid = invalid
            if(invalid === 'true') {
                this.rebuild()
            }
        }
    }

    /**
     * @returns {string}
     */
    get invalid() {
        return super.invalid
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this.textbox.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return this.textbox.label
    }

    /**
     * @returns {ListBox}
     */
    get listbox() {
        return this._listbox
    }

    /**
     * @param {{ textContent }[]} options
     */
    set options(options) {
        this.dataset.options = JSON.stringify(options)
    }

    /**
     * @returns {{ textContent }[]}
     */
    get options() {
        return JSON.parse(this.dataset.options)
    }

    /**
     * @param {ParentNodeAssembler|*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        this.ownerDocument.on('click', this.onDocumentClick)
        this.ownerDocument.on('focus', this.onDocumentFocus, true)
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.textbox.readOnly = readOnly
        this.setAttr(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @returns {TextBox}
     */
    get textbox() {
        return this._textbox
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this.textbox.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.textbox.value
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
 * @returns {ComboBox}
 */
export function combobox(init) {
    return new ComboBox(init)
}
