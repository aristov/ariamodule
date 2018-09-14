import { Div } from 'htmlmodule/lib/Div'
import { RoleType } from './RoleType'

/**
 * @summary A document structural element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#structure
 * @abstract
 */
export class Structure extends RoleType {
    /**
     * @returns {string}
     */
    static get elementAssembler() {
        return Div
    }
}
