import { ARIATypeToken } from './ARIATypeToken'

const TOKEN_TRUE = 'true'
const TOKEN_FALSE = 'false'

/**
 * Indicates the element that represents the current item
 *  within a container or set of related elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-current
 */
export class ARIACurrent extends ARIATypeToken {
    /**
     * @param {*} value {boolean|string}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {boolean|string}
     */
    get value() {
        const value = this.node.value
        return !value || value === TOKEN_FALSE?
            false :
            value === TOKEN_TRUE || value
    }

    /**
     * @returns {boolean|string}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || String(value) === TOKEN_FALSE
    }

    /**
     * @returns {boolean}
     */
    static get defaultValue() {
        return false
    }
}

/**
 * @alias ARIACurrent
 */
export { ARIACurrent as Current }
