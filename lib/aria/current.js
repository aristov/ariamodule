import { TokenAttrType } from './token'

const TOKEN_FALSE = 'false'

/**
 * @summary Indicates the element that represents the current item
 *  within a container or set of related elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-current
 */
export class Current extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}
