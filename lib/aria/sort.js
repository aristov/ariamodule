import { TokenAttrType } from './token'

const TOKEN_NONE = 'none'

/**
 * @summary Indicates if items in a table or grid are sorted in ascending or descending order.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-sort
 */
export class Sort extends TokenAttrType {
    /**
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}
