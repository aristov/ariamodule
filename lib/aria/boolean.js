import { ARIAAttrAssembler } from './aria'

const TOKEN_TRUE = 'true'

/**
 * Value representing either true or false.
 * The default value for this value type is false unless otherwise specified.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false
 */
export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Boolean}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return this.node.value === TOKEN_TRUE
    }

    /**
     * @param {Boolean} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === false
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return false
    }
}
