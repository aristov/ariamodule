import { ARIAAttrAssembler } from './aria'

const TOKEN_TRUE = 'true'
const TOKEN_FALSE = 'false'

export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Boolean|String}
     */
    set value(value) {
        if(value && value !== TOKEN_FALSE) {
            super.value = String(value)
        }
        else this.remove()
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return super.value === TOKEN_TRUE
    }

    /**
     * @returns {Boolean}
     */
    static get value() {
        return false
    }
}
