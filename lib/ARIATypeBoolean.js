import { ARIAAttrAssembler } from './ARIAAttrAssembler'

const TOKEN_TRUE = 'true'
const TOKEN_FALSE = 'false'

/**
 * Value representing either true or false.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false
 * @abstract
 */
export class ARIATypeBoolean extends ARIAAttrAssembler {
    /**
     * value = true
     * value = 'true' 
     * value = '*' // non empty string
     * value = 1
     * value = * // non zero
     *      => 'true'
     *
     * value = false
     * value = 'false'
     * value = ''
     * value = null
     * value = undefined
     * value = 0
     *      => no attr
     *
     * @param {*} value {boolean|string|number|null|undefined}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = TOKEN_TRUE
    }

    /**
     * value === 'true' 
     * value === '*' // non empty string
     *      => true
     *
     * value === 'false'
     * value === ''
     * no attr
     *      => false
     *
     * @returns {boolean}
     */
    get value() {
        const value = this.node.value
        return Boolean(value) && value !== TOKEN_FALSE
    }

    /**
     * @param {*} value
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return !value || value === TOKEN_FALSE
    }

    /**
     * @returns {boolean}
     */
    static get defaultValue() {
        return false
    }
}
