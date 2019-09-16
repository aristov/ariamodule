import { ARIATypeToken } from './ARIATypeToken'

let undefined
const TOKEN_FALSE = 'false'
const TOKEN_UNDEFINED = 'undefined'

/**
 * Value representing true, false, or not applicable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false-undefined
 * @abstract
 */
export class ARIATypeApplicable extends ARIATypeToken {
    /**
     * value = true
     * value = 'true'
     * value = '*' // non empty string
     *      => 'true'
     *
     * value = false
     * value = 'false'
     *      => 'false'
     *
     * value = undefined
     * value = 'undefined'
     * value = ''
     *      => no attr
     *
     * @param {*} value {boolean|undefined|string}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(Boolean(value) && value !== TOKEN_FALSE)
    }

    /**
     * value === 'true'
     * value === '*' // non empty string
     *      => true
     *
     * value === 'false'
     *      => false
     *
     * value === 'undefined'
     * value === ''
     * no attr
     *      => undefined
     *
     * @returns {boolean|undefined}
     */
    get value() {
        const value = this.node.value
        return !value || value === TOKEN_UNDEFINED?
            undefined :
            Boolean(value) && value !== TOKEN_FALSE
    }
}
