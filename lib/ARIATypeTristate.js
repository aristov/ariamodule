import { ARIATypeApplicable } from './ARIATypeApplicable'

let undefined
const TOKEN_MIXED = 'mixed'

/**
 * Value representing true or false, with an intermediate "mixed" value.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_tristate
 * @abstract
 */
export class ARIATypeTristate extends ARIATypeApplicable {
    /**
     * value = true
     * value = 'true'
     * value = '*' // non empty string
     * value = 1
     * value = * // non zero number
     *      => 'true'
     *
     * value = false
     * value = 'false'
     * value = 0
     *      => 'false'
     *
     * value = 'mixed'
     *      => 'mixed'
     *
     * value = null
     * value = undefined
     * value = ''
     *      => no attr
     *
     * @param {*} value {boolean|string}
     */
    set value(value) {
        if(value === TOKEN_MIXED) {
            this.node.value = TOKEN_MIXED
        }
        else super.value = value
    }

    /**
     * value === 'true'
     * value === '0'
     * value === '*' // non empty string
     *      => true
     *
     * value === 'false'
     *      => false
     *
     * value === 'mixed'
     *      => 'mixed'
     *
     * value === 'undefined'
     * value === ''
     * no attr
     *      => undefined
     *
     * @returns {boolean|string}
     */
    get value() {
        return this.node.value === TOKEN_MIXED?
            TOKEN_MIXED :
            super.value
    }

    /**
     * @returns {boolean}
     */
    static get defaultValue() {
        return undefined
    }
}
