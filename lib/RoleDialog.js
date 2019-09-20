import { Role } from './Role'
import { RoleWindow } from './RoleWindow'

/**
 * A dialog is a descendant window of the primary window of a web application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#dialog
 */
export class RoleDialog extends RoleWindow {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleDialog as Dialog }

Role.Dialog = RoleDialog
