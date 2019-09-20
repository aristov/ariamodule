import { ARIAExpanded } from './ARIAExpanded'
import { ARIAModal } from './ARIAModal'
import { Role } from './Role'
import { RoleRoleType } from './RoleRoleType'

/**
 * A browser or application window.
 * @see https://www.w3.org/TR/wai-aria-1.1/#window
 * @abstract
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

Role.Window = RoleWindow
