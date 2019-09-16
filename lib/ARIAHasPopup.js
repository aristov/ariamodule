import { ARIATypeToken } from './ARIATypeToken'

const TOKEN_TRUE = 'true'
const TOKEN_FALSE = 'false'

/**
 * Indicates the availability and type of interactive popup element,
 *  such as menu or dialog, that can be triggered by an element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
 */
export class ARIAHasPopup extends ARIATypeToken {
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
 * @alias ARIAHasPopup
 */
export { ARIAHasPopup as HasPopup }
