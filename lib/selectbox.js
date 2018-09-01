// uimodule
import { ElementAssembler } from 'dommodule/lib/element'
import { Span } from 'htmlmodule/lib/span'
import { Role } from './role'
import { Select } from './select'
import { Option } from './option'
import { Button } from './button'
import { ListBox } from './listbox'

let undefined

function hasCheckedOptions(instance) {
    return Boolean(instance.find(Option, ({ checked }) => checked !== undefined))
}

export class SelectBox extends Select {
    /**
     * @param {*} [init]
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
     * @param {*} [init]
     */
    init(init) {
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        super.init(init)
    }

    /**
     * @param {{}} init
     * @param {array.Option} [init.options]
     */
    assign(init) {
        if(init.options) {
            this.options = init.options
        }
        super.assign(init)
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
            if(!this.multiselectable || !hasCheckedOptions(this)) {
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
            if(!this.expanded || this.multiselectable) {
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
        this.classList.toggle('disabled', this._button.disabled = this._listBox.disabled = disabled)
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return this._button.disabled
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
     * @param {*} label {string|ElementAssembler|Role|*}
     */
    set label(label) {
        if(label instanceof ElementAssembler || label instanceof Role) {
            this.prepend(this._button.labelledBy = label)
        }
        else this._button.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        const labelledBy = this.labelledBy
        return labelledBy.length?
            labelledBy.join() :
            this._button.label
    }

    /**
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this._listBox.multiselectable = multiselectable
    }

    /**
     * @returns {boolean}
     */
    get multiselectable() {
        return this._listBox.multiselectable
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
        this.classList.toggle('readonly', this._listBox.readOnly = readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this._listBox.readOnly
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
     * @returns {class} Span
     */
    static get elementAssembler() {
        return Span
    }

    /**
     * @returns {string}
     */
    static get notSelectedHTML() {
        return '&nbsp;'
    }
}

/**
 * @param {*} [init]
 * @returns {SelectBox}
 */
export function selectBox(init) {
    return new SelectBox(init)
}
