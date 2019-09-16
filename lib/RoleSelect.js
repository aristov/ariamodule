import { Role } from './Role'
import { RoleComposite } from './RoleComposite'
import { RoleForm } from './RoleForm'
import { ARIAExpanded } from './aria/ARIAExpanded'
import { ARIAOrientation } from './aria/ARIAOrientation'

/**
 * @summary A form widget that allows the user to make selections from a set of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#select
 * @abstract
 */
export class RoleSelect extends RoleComposite {
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
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(ARIAOrientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(ARIAOrientation)
    }

    /**
     * @returns {RoleForm|null}
     */
    get form() {
        return this.closest(RoleForm)
    }
}

export { RoleSelect as Select, RoleSelect as ARIASelect }

Role.Select = RoleSelect
