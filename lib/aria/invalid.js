import { TokenAttrType } from './token'

const TOKEN_FALSE = 'false'

/**
 * @summary Indicates the entered value does not conform to the format expected by the application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-invalid
 */
export class Invalid extends TokenAttrType {
    /**
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}
