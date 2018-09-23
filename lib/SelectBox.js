// uimodule
import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Span } from 'htmlmodule/lib/Span'
import { Select } from './Select'
import { Option } from './Option'
import { Button } from './Button'
import { ListBox } from './ListBox'
import { ReadOnly } from './aria/ReadOnly'

let undefined

function hasCheckedOptions(instance) {
    return Boolean(instance.find(Option, ({ checked }) => checked !== undefined))
}

export class SelectBox extends Select {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.children = [
            this._button = new Button({
                hasPopup : 'listbox',
                expanded : false,
                controls : this._listBox = new ListBox({
                    tabIndex : null,
                    expanded : false,
                    onchange : event => this.update()
                }),
                onclick : event => this.onButtonClick(event)
            }),
            this._listBox
        ]
    }

    /**
     * @param {{}} init
     * @param {array.Option} [init.options]
     */
    init(init) {
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        if(init.options) {
            this.options = init.options
        }
        super.init(init)
    }

    /**
     * @param {string} name
     * @returns {boolean}
     */
    setPropertyFilter(name) {
        return name !== 'options' && super.setPropertyFilter(name)
    }

    /**
     * Focus the selectbox
     */
    focus() {
        this._button.focus()
    }

    /**
     * @param {MouseEvent} event
     */
    onButtonClick(event) {
        const expanded = this.expanded
        if(expanded) {
            if(!this.multiSelectable || !hasCheckedOptions(this)) {
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
        if(this._listBox.contains(target)) {
            if(this.multiSelectable) {
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
    onDocumentFocusIn(event) {
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
            else this._listBox.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            if(!this.expanded || this.multiSelectable) {
                this._listBox.onSpaceKeyUp(event)
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        if(this.expanded && hasCheckedOptions(this)) {
            this._listBox.onSpaceKeyDown(event)
        }
    }

    /**
     * Update the button text
     */
    update() {
        const listBox = this._listBox
        const options = hasCheckedOptions(this)?
            listBox.findAll(Option, ({ checked }) => checked) :
            listBox.selectedOptions
        if(options.length) {
            this._button.textContent = options.map(option => option.textContent).join()
        }
        else this._button.innerHTML = this.constructor.notSelectedHTML
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = this._button.disabled = this._listBox.disabled = disabled
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
        const { ownerDocument } = this
        if(expanded) {
            ownerDocument.on('click', this.onDocumentClick, this)
            ownerDocument.on('focusin', this.onDocumentFocusIn, this)
        }
        else {
            ownerDocument.un('click', this.onDocumentClick, this)
            ownerDocument.un('focusin', this.onDocumentFocusIn, this)
        }
        this._button.expanded = this._listBox.expanded = expanded
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this._listBox.expanded
    }

    /**
     * @param {*} label {string|ElementAssembler|*}
     */
    set label(label) {
        if(label instanceof ElementAssembler) {
            this.prepend(this._button.labelledBy = label)
        }
        else this._button.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return this._button.label || this._button.labelledBy.map(({ textContent }) => textContent).join()
    }

    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this._listBox.multiSelectable = multiSelectable
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this._listBox.multiSelectable
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._listBox.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._listBox.name
    }

    /**
     * @param {Option[]} options
     */
    set options(options) {
        this._listBox.options = options
        this.update()
    }

    /**
     * @returns {Option[]}
     */
    get options() {
        return this._listBox.options
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ReadOnly, this._listBox.readOnly = readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
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
        this._listBox.value = value
        this.update()
    }

    /**
     * @returns {string}
     */
    get value() {
        return this._listBox.value
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {string}
     */
    static get notSelectedHTML() {
        return '&nbsp;'
    }
}
