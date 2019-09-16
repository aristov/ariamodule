import { ARIAAttrAssembler } from './ARIAAttrAssembler'

const EMPTY_STRING = ''

/**
 * Unconstrained value type.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_string
 * @abstract
 */
export class ARIATypeString extends ARIAAttrAssembler {
    /**
     * @returns {string}
     */
    static get defaultValue() {
        return EMPTY_STRING
    }
}
