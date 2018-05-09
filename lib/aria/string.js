import { ARIAAttrAssembler } from './aria'

/**
 * @summary Unconstrained value type.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_string
 */
export class StringAttrType extends ARIAAttrAssembler {
    /**
     * @param {String} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === this.defaultValue
    }
}
