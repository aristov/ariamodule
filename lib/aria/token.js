import { ARIAAttrAssembler } from './aria'

const TOKEN_UNDEFINED = 'undefined'
const DEFAULT_VALUE = ''

/**
 * @summary One of a limited set of allowed values. An explicit value
 *  of undefined for this type is the equivalent of providing no value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token
 */
export class TokenAttrType extends ARIAAttrAssembler {
    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || value === TOKEN_UNDEFINED
    }

    /**
     * @returns {String}
     */
    static get defaultValue() {
        return DEFAULT_VALUE
    }
}
