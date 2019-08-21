import { Role } from './Role'
import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Input as HTMLInput } from 'htmlmodule/lib/Input'
import { Span } from 'htmlmodule/lib/Span'
import { Input } from './Input'
import { AutoComplete } from './aria/AutoComplete'
import { Required } from './aria/Required'
import { ActiveDescendant } from './aria/ActiveDescendant'
import { MultiLine } from './aria/MultiLine'
import { Placeholder as ARIAPlaceholder } from './aria/Placeholder'
import { ReadOnly } from './aria/ReadOnly'

/**
 * @summary A type of input that allows free-form text as its value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#textbox
 */
export class TextBox extends Input {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.children = [
            this._box = new Box(this._edit = new Edit({
                contentEditable : true,
                onblur : event => this.onBlur(event),
                onfocus : event => this.onFocus(event),
                oninput : event => this.onInput(event),
                onkeydown : event => this.onKeyDown(event),
                onmousedown : event => this.onMouseDown(event),
                onpaste : event => this.onPaste(event)
            })),
            this._input = new HTMLInput({ type : 'hidden' })
        ]
        this._placeholder = null
        this._pointerFocus = false
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('click', this.onClick)
        super.init(init)
    }

    /**
     * Focus the input
     */
    focus() {
        this._edit.focus()
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else if([this._box, ...this.labelledBy].some(label => label.contains(event.target))) {
            this.focus()
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onBlur(event) {
        this.classList.remove('focus')
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        if(this._pointerFocus) {
            this._pointerFocus = false
        }
        // else getSelection().selectAllChildren(this._edit.node)
        this.classList.add('focus')
    }

    /**
     * @param {InputEvent} event
     */
    onInput(event) {
        const value = this._input.value = this._edit.textContent.replace(/\s/g, ' ')
        if(value) {
            this.dataset.value = value
        }
        else delete this.dataset.value
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key === 'Enter') {
            this.onEnterKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        this.multiLine || event.preventDefault()
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        this._pointerFocus = true
    }

    /**
     * @param {ClipboardEvent} event
     */
    onPaste(event) {
        event.preventDefault()
        if(this.readOnly) return
        const edit = this._edit
        const textContent = edit.textContent
        const selection = getSelection()
        const { anchorOffset, focusOffset } = selection
        const startOffset = Math.min(anchorOffset, focusOffset)
        const endOffset = Math.max(anchorOffset, focusOffset)
        const beforeText = textContent.substring(0, startOffset)
        const afterText = textContent.substring(endOffset, textContent.length)
        const data = event.clipboardData.getData('text')
        this.value = beforeText + data + afterText
        selection.collapse(edit.node.firstChild, beforeText.length + data.length)
        this.emit('input', { bubbles : true })
    }

    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {Role|ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttr(ActiveDescendant)
    }

    /**
     * @param {string} autoComplete
     */
    set autoComplete(autoComplete) {
        this.setAttr(AutoComplete, autoComplete)
    }

    /**
     * @returns {string}
     */
    get autoComplete() {
        return this.getAttr(AutoComplete)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
        this._edit.contentEditable = !disabled
        this._input.parentNode = disabled? null : this
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @param {boolean} multiLine
     */
    set multiLine(multiLine) {
        this.setAttr(MultiLine, multiLine)
    }

    /**
     * @returns {boolean}
     */
    get multiLine() {
        return this.getAttr(MultiLine)
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._input.name = name
    }

    /**
     * @return {string}
     */
    get name() {
        return this._input.name
    }

    /**
     * @param {string} placeholder
     */
    set placeholder(placeholder) {
        this.setAttr(ARIAPlaceholder, placeholder)
        if(this._placeholder) {
            this._placeholder.textContent = placeholder
        }
        else {
            this._placeholder = new Placeholder({
                nextSibling : this._edit,
                textContent : placeholder
            })
        }
    }

    /**
     * @returns {string}
     */
    get placeholder() {
        return this.getAttr(ARIAPlaceholder)
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ReadOnly, readOnly)
        this._edit.contentEditable = !readOnly
        this._edit.tabIndex = readOnly? 0 : null
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(Required, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(Required)
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this._edit.innerHTML = value.replace(/\s/g, '&nbsp;')
        if(value) {
            this.dataset.value = this._input.value = value.replace(/\s/g, ' ')
        }
        else {
            this._input.value = ''
            delete this.dataset.value
        }
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

class Box extends Span {}
class Edit extends Span {}
class Placeholder extends Span {}

TextBox.Box = Box
TextBox.Edit = Edit
TextBox.Placeholder = Placeholder
Role.TextBox = TextBox

// msie11 shim
if(window.clipboardData) {
    Object.defineProperty(DragEvent.prototype, 'clipboardData', {
        get() {
            return window.clipboardData
        }
    })
}
