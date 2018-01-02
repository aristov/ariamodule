import { Input as HTMLInput, Label, Span } from 'htmlmodule'
import { ReadOnly } from './aria'
import { Select } from './select'
import { Radio } from './radio'

export class RadioGroup extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        const observer = new MutationObserver(mutations => {
            mutations.forEach(record => {
                if(record.attributeName === 'aria-checked') {
                    this.onChecked(record)
                }
            })
        })
        observer.observe(this.ownerElement.node, {
            attributes : true,
            subtree : true
        })
        if(this.disabled) {
            this.radios.forEach(radio => radio.disabled = true)
        }
    }

    onChecked(record) {
        const checked = record.target.getAttribute('aria-checked')
        if(checked === 'true') {
            const target = this.getRole(record.target)
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
     * @param {*} input
     */
    set input(input) {
        this.input.init(input)
    }

    /**
     * @returns {HTMLInput}
     */
    get input() {
        return this._input || (this._input = new HTMLInput({
            parentNode : this,
            type : 'hidden'
        }))
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const id = this.id + '-label'
        const instance = new Label({ id, children : label })
        this.ownerElement.prepend(this.labelledBy = instance)
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
        const checkedRadio = this.find(Radio, '[aria-checked=true]')
        if(checkedRadio) {
            this.value = checkedRadio.value
        }
        else {
            const all = this.findAll(Radio)
            const filtered = all.filter(({ disabled }) => !disabled)
            const radio = filtered[0]
            if(radio) radio.tabIndex = 0
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

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Span
    }
}

/**
 * @param {*} [init]
 * @returns {RadioGroup}
 */
export function radioGroup(...init) {
    return new RadioGroup(...init)
}
