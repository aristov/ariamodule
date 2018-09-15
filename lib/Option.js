import { Input as HTMLInput } from 'htmlmodule/lib/Input'
import { Input } from './Input'
import { ListBox } from './ListBox'
import { Checked } from './aria/Checked'
import { PosInSet } from './aria/PosInSet'
import { Selected } from './aria/Selected'
import { SetSize } from './aria/SetSize'

/**
 * @summary A selectable item in a select list.
 * @see https://www.w3.org/TR/wai-aria-1.1/#option
 * todo disabled
 * todo checked
 * todo no value => use textContent as value
 */
export class Option extends Input {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._input = new HTMLInput({ type : 'hidden' })
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('click', this.onClick)
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
    }

    /**
     * @param {boolean|string|undefined} checked
     */
    set checked(checked) {
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get checked() {
        return this.getAttr(Checked)
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = [children, this.find(HTMLInput)]
    }

    /**
     * @returns {array.ElementAssembler|*}
     */
    get children() {
        return super.children
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        super.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        const listbox = this.listbox
        return listbox && listbox.disabled || super.disabled
    }

    /**
     * @returns {ListBox|*|null}
     */
    get listbox() {
        return this.closest(ListBox)
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._input.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._input.name
    }

    /**
     * @param {number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttr(PosInSet, posInSet)
    }

    /**
     * @returns {number}
     */
    get posInSet() {
        return this.getAttr(PosInSet)
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        if(selected) {
            const listbox = this.listbox
            if(listbox && !listbox.multiSelectable) {
                listbox.activeDescendant = this
            }
        }
        this._input.parentNode = selected? this : null
        this.setAttr(Selected, selected)
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.getAttr(Selected) || false
    }

    /**
     * @param {number} setSize
     */
    set setSize(setSize) {
        this.setAttr(SetSize, setSize)
    }

    /**
     * @returns {number}
     */
    get setSize() {
        return this.getAttr(SetSize)
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this._input.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this._input.value
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {Option}
 */
export function option(init) {
    return new Option(init)
}