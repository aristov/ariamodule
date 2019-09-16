import { ARIATypeToken } from './ARIATypeToken'

const TOKEN_NONE = 'none'

/**
 * Indicates if items in a table or grid are sorted in ascending or descending order.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-sort
 */
export class ARIASort extends ARIATypeToken {
    /**
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}

/**
 * @alias ARIASort
 */
export { ARIASort as Sort }
