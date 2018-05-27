import { ActiveDescendant } from './aria/activedescendant'
import { Expanded } from './aria/expanded'
import { HasPopup } from './aria/haspopup'
import { ReadOnly } from './aria/readonly'
import { Select } from './select'
import { Textbox } from './textbox'
import { Button } from './button'
import { Listbox } from './listbox'
import { Option } from './option'

/**
 * @summary A composite widget containing a single-line textbox and another element,
 *  such as a listbox or grid, that can dynamically pop up to help the user
 *  set the value of the textbox.
 * @see https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
export class Combobox extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.children = [
            this._textbox = new Textbox({
                onkeydown : this.onTextBoxKeyDown.bind(this),
                oninput : this.onTextBoxInput.bind(this),
                onclick : this.onTextBoxClick.bind(this)
            }),
            this._button = new Button({
                tabIndex : null,
                onclick : this.onButtonClick.bind(this),
                innerHTML : '&nbsp;'
            }),
            this._listbox = new Listbox({
                tabIndex : null,
                classList : 'popup',
                onchange : this.onListBoxChange.bind(this),
                onclick : this.onListBoxClick.bind(this)
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
        this.value = this.listbox.text
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
        this.value = listbox.text
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
        this.setAttribute(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {Option|null}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
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
        this.setAttribute(Expanded, expanded)
        if(expanded && !this.listbox.options.length) {
            this.rebuild()
        }
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
     * @param {string} hasPopup
     */
    set hasPopup(hasPopup) {
        super.hasPopup = hasPopup
    }

    /**
     * @returns {string}
     */
    get hasPopup() {
        return this.hasAttribute(HasPopup)?
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
     * @returns {Listbox}
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
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @returns {Textbox}
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
 * @returns {Combobox}
 */
export function combobox(init) {
    return new Combobox(init)
}
