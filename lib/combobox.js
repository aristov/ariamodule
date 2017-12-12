import { ActiveDescendant, Expanded, HasPopup, ReadOnly } from './aria'
import { Select } from './select'
import { Textbox } from './textbox'
import { Button } from './button'
import { Listbox } from './listbox'
import { Option } from './option'

/**
 * A composite widget containing a single-line textbox and another element,
 * such as a listbox or grid, that can dynamically pop up to help the user
 * set the value of the textbox.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
export class Combobox extends Select {
    /**
     * @param {*} init
     */
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

    /**
     * @param {MouseEvent} event
     */
    onTextBoxClick(event) {
        this.textbox.readOnly && this.toggle()
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
    
    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const listbox = this.listbox
        this.expanded = 'true'
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
            this.expanded = 'false'
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocus(event) {
        if(!this.ownerElement.contains(event.target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        this.value = this.listbox.text
        this.toggle()
        this.invalid = 'false'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.value) {
            this.value = ''
            this.clear()
        }
        else this.expanded = 'false'
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
        this.expanded = 'false'
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
        this.expanded = String(this.expanded === 'false')
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
     * @returns {RoleAttrAssembler|ElementAssembler|*}
     */
    get button() {
        return this.find(Button)
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
        if(expanded === 'true' && !this.listbox.options.length) {
            this.rebuild()
        }
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
     * @param {String} hasPopup
     */
    set hasPopup(hasPopup) {
        super.hasPopup = hasPopup
    }

    /**
     * @returns {String}
     */
    get hasPopup() {
        return this.hasAttribute(HasPopup)?
            super.hasPopup :
            'listbox'
    }

    /**
     * @param {String} invalid
     */
    set invalid(invalid) {
        if(invalid !== this.invalid) {
            super.invalid = invalid
            if(invalid === 'true') this.rebuild()
        }
    }

    /**
     * @returns {String}
     */
    get invalid() {
        return super.invalid
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.textbox.label = label
    }

    /**
     * @returns {String} 
     */
    get label() {
        return this.textbox.label
    }

    /**
     * @returns {Listbox|null}
     */
    get listbox() {
        return this.find(Listbox)
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
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.textbox.readOnly = readOnly
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @returns {Textbox|null}
     */
    get textbox() {
        return this.find(Textbox)
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.textbox.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.textbox.value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
