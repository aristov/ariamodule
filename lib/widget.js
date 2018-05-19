import { Span } from 'htmlmodule/lib/span'
import { RoleType } from './roletype'

/**
 * @summary An interactive component of a graphical user interface (GUI).
 * @see https://www.w3.org/TR/wai-aria-1.1/#widget
 * @abstract
 */
export class Widget extends RoleType {
    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Span
    }
}
