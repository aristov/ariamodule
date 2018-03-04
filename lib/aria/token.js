import { ARIAAttrAssembler } from './aria'

const TOKEN_UNDEFINED = 'undefined'

/**
 * @summary One of a limited set of allowed values. An explicit value
 *  of undefined for this type is the equivalent of providing no value.
 * @see {@link https://www.w3.org/TR/wai-aria-1.1/#valuetype_token}
 */
export class TokenAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {String|*}
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
        return !value || value === TOKEN_UNDEFINED
    }
}
