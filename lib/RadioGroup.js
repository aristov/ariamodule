import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Input } from 'htmlmodule/lib/Input'
import { ReadOnly } from './aria/ReadOnly'
import { Required } from './aria/Required'
import { Role } from './Role'
import { Select } from './Select'
import { Radio } from './Radio'

/**
 * @summary A group of radio buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
export class RadioGroup extends Select {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._input = new Input({
            parentNode : this,
            type : 'hidden'
        })
    }

    /**
     * Reset the tabIndex value of descendant radios
     */
    resetTabIndex() {
        const checkedRadio = this.checkedRadio
        const targetRadio = checkedRadio && !checkedRadio.disabled?
            checkedRadio :
            this.find(Radio, ({ disabled }) => !disabled)
        if(targetRadio) {
            this.radios.forEach(radio => {
                if(!radio.disabled) {
                    radio.tabIndex = radio === targetRadio? 0 : -1
                }
            })
        }
    }

    /**
     * @param {Radio|*|null} checkedRadio
     */
    set checkedRadio(checkedRadio) {
        if(checkedRadio) {
            if(checkedRadio.checked) {
                this.radios.forEach(radio => {
                    if(radio === checkedRadio) {
                        this._input.value = radio.value
                    }
                    else radio.checked = false
                })
            }
            else checkedRadio.checked = true
        }
        else {
            checkedRadio = this.checkedRadio
            if(checkedRadio) {
                checkedRadio.checked = false
            }
            this._input.value = ''
            this.resetTabIndex()
        }
    }

    /**
     * @returns {Radio|*|null}
     */
    get checkedRadio() {
        return this.find(Radio, ({ checked }) => checked)
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = [this._input, children]
        const checkedRadio = this.checkedRadio
        if(this.disabled) {
            this.radios.forEach(radio => radio.disabled = true)
        }
        if(checkedRadio) {
            this._input.value = checkedRadio.value
        }
        else this.resetTabIndex()
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
        super.disabled = this._input.disabled = disabled
        if(!disabled) {
            this.resetTabIndex()
        }
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
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
     * @returns {Radio[]}
     */
    get radios() {
        return this.findAll(Radio)
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ReadOnly, readOnly)
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
        if(value !== this.value) {
            this.checkedRadio = this.find(Radio, ({ value : v }) => v === value)
        }
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

Role.RadioGroup = RadioGroup
