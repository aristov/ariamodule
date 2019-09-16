import { Role } from './Role'
import { RoleRoleType } from './RoleRoleType'
import { ARIAExpanded } from './aria/ARIAExpanded'
import { ARIAModal } from './aria/ARIAModal'

/**
 * @summary A browser or application window.
 * @see https://www.w3.org/TR/wai-aria-1.1/#window
 * @abstract
 *
 * Not to be confused with the native Window interface of the HTML standard
 * @see https://www.w3.org/TR/html/single-page.html#the-window-object
 */
export class RoleWindow extends RoleRoleType {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(ARIAExpanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(ARIAExpanded)
    }

    /**
     * @param {boolean} modal
     */
    set modal(modal) {
        this.setAttr(ARIAModal, modal)
    }

    /**
     * @returns {boolean}
     */
    get modal() {
        return this.getAttr(ARIAModal)
    }
}

export { RoleWindow as Window, RoleWindow as ARIAWindow }

Role.Window = RoleWindow
