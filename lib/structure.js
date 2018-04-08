import { Div } from 'htmlmodule'
import { RoleType } from './roletype'

/**
 * @summary A document structural element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#structure
 * @abstract
 */
export class Structure extends RoleType {
    /**
     * @returns {String}
     */
    static get elementAssembler() {
        return Div
    }
}
