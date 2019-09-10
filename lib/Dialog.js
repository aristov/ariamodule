import { Role } from './Role'
import { Window } from './Window'

/**
 * @summary A dialog is a descendant window of the primary window of a web application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#dialog
 */
export class Dialog extends Window {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIADialog = Role.Dialog = Dialog
