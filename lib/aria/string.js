import { ARIAAttrAssembler } from './aria'

const EMPTY_STRING = ''

/**
 * @summary Unconstrained value type.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_string
 */
export class StringAttrType extends ARIAAttrAssembler {
    /**
     * @returns {string}
     */
    static get defaultValue() {
        return EMPTY_STRING
    }
}
