import { Input } from 'htmlmodule/lib/input'
import { Label } from 'htmlmodule/lib/label'
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
            console.log(mutations)
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
        if(checked === 'true') {
            const value = this.value
            this.radios.forEach(radio => {
                if(radio === target) {
                    this.value = radio.value
                }
                else radio.checked = 'false'
            })
            if(this.value !== value) {
                this.emit('change', { bubbles : true })
            }
        }
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.radios.forEach(radio => radio.disabled = disabled)
        super.disabled = this.input.disabled = disabled
    }

    /**
     * @returns {Boolean}
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
     * @param {String} label
     */
    set label(label) {
        this.prepend(this.labelledBy = new Label(label))
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.input.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.input.name
    }

    /**
     * @param {Radio[]} radios
     */
    set radios(radios) {
        this.append(radios)
        const checkedRadio = this.find(Radio, ({ checked }) => checked === 'true')
        if(checkedRadio) {
            this.value = checkedRadio.value
        }
        else {
            const all = this.findAll(Radio)
            const filtered = all.filter(({ disabled }) => !disabled)
            const radio = filtered[0]
            if(radio) {
                radio.tabIndex = 0
            }
        }
        if(this.disabled) {
            this.radios.forEach(radio => radio.disabled = true)
        }
    }

    /**
     * @returns {Radio[]}
     */
    get radios() {
        return this.findAll(Radio)
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.input.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.input.value
    }

    /**
     * @returns {Boolean}
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
