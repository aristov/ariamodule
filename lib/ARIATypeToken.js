import { ARIAAttrAssembler } from './ARIAAttrAssembler'

let undefined
const TOKEN_UNDEFINED = 'undefined'

/**
 * One of a limited set of allowed values. An explicit value
 *  of undefined for this type is the equivalent of providing no value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token
 * @abstract
 */
export class ARIATypeToken extends ARIAAttrAssembler {
    /**
     * value = 'token'
     *      => 'token'
     *
     * value = null
     * value = undefined
     * value = 'undefined'
     * value = ''
     *      => no attr
     *
     * @param {string|undefined} value
     */
    set value(value) {
        super.value = value
    }

    /**
     * value === 'token'
     *      => 'token'
     *
     * value === 'undefined'
     * value === ''
     * no attr
     *      => undefined
     *
     * @returns {string|undefined}
     */
    get value() {
        const value = super.value
        return !value || value === TOKEN_UNDEFINED?
            this.constructor.defaultValue :
            value
    }

    /**
     * @param {*} value
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || String(value) === TOKEN_UNDEFINED
    }

    /**
     * @returns {undefined}
     */
    static get defaultValue() {
        return undefined
    }
}
