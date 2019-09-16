import { ARIATypeToken } from './ARIATypeToken'

const TOKEN_OFF = 'off'

/**
 * Indicates that an element will be updated, and describes
 *  the types of updates the user agents, assistive technologies,
 *  and user can expect from the live region.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-live
 */
export class ARIALive extends ARIATypeToken {
    /**
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_OFF
    }
}

/**
 * @alias ARIALive
 */
export { ARIALive as Live }
