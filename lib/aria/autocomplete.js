import { TokenAttrType } from './token'

const TOKEN_NONE = 'none'

/**
 * @summary Indicates whether inputting text could trigger display
 *  of one or more predictions of the user's intended value for an input
 *  and specifies how predictions would be presented if they are made.
 * @see {@link https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete}
 */
export class Autocomplete extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}
