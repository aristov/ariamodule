import { ARIATypeToken } from './ARIATypeToken'

const TOKEN_NONE = 'none'

/**
 * Indicates whether inputting text could trigger display
 *  of one or more predictions of the user's intended value for an input
 *  and specifies how predictions would be presented if they are made.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete
 */
export class ARIAAutoComplete extends ARIATypeToken {
    /**
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}

/**
 * @alias ARIAAutoComplete
 */
export { ARIAAutoComplete as AutoComplete }
