import { Input } from 'htmlmodule/lib/input'
import { Checked } from './aria/checked'
import { ReadOnly } from './aria/readonly'
import { Select } from './select'
import { Radio } from './radio'

/**
 * @summary A group of radio buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
export class RadioGroup extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._input = new Input({ parentNode : this, type : 'hidden' })
        this.observe()
        super.init(init)
    }

    observe() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(record => this.onChecked(record))
        })
        observer.observe(this.ownerElement.node, {
            attributes : true,
            attributeFilter : [Checked.localName],
            subtree : true
        })
    }

    onChecked(record) {
        const target = this.getRoleOf(record.target)
        const checked = target.checked
        if(checked) {
            const value = this.value
            this.radios.forEach(radio => {
                if(radio === target) {
                    this.value = radio.value
                }
                else radio.checked = false
            })
            if(this.value !== value) {
                this.emit('change', { bubbles : true })
            }
        }
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = children
        const checkedRadio = this.find(Radio, ({ checked }) => checked)
        if(checkedRadio) {
            this.value = checkedRadio.value
        }
        else {
            const enabledRadio = this.find(Radio, ({ disabled }) => !disabled)
            if(enabledRadio) {
                enabledRadio.tabIndex = 0
            }
        }
        if(this.disabled) {
            this.radios.forEach(radio => radio.disabled = true)
        }
    }

    /**
     * @returns {ElementAssembler[]}
     */
    get children() {
        return super.children
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.radios.forEach(radio => radio.disabled = disabled)
        super.disabled = this.input.disabled = disabled
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @returns {Input}
     */
    get input() {
        return this._input
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.input.name
    }

    /**
     * @returns {Radio[]}
     */
    get radios() {
        return this.findAll(Radio)
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {string} value
     */
    set value(value) {
        this.input.value = value
    }

    /**
     * @returns {string}
     */
    get value() {
        return this.input.value
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
 * @returns {RadioGroup}
 */
export function radioGroup(init) {
    return new RadioGroup(init)
}
