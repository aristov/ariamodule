import { Span } from 'htmlmodule'
import { Label } from 'htmlmodule/lib/index'
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
     * @param {Radio[]} radios
     */
    set radios(radios) {
        this.append(radios)
    }

    /**
     * @returns {Radio[]}
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
