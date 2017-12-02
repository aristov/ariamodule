import { Span } from 'htmlmodule'
import { Select } from './select'
import { Radio } from './radio'

export class RadioGroup extends Select {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        const radios = this.radios
        if(radios.length) {
            if(this.disabled) {
                radios.forEach(radio => radio.disabled = true)
            }
            else {
                const first = this.find(Radio, ':not([aria-disabled])')
                let checkedRadio = null
                radios.reverse().forEach(radio => {
                    if(!radio.disabled) {
                        if(radio.checked === 'true') {
                            (checkedRadio = radio).tabIndex = 0
                        }
                        else radio.tabIndex = -1
                    }
                })
                if(checkedRadio) {
                    this.value = checkedRadio.value
                }
                else if(first) first.tabIndex = 0
            }
        }
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.radios.forEach(radio => {
            if(radio.disabled !== disabled) {
                radio.disabled = disabled
            }
        })
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @returns {(Radio)[]}
     */
    get radios() {
        return this.findAll(Radio)
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.dataset.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.dataset.value
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