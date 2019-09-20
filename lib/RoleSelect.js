import { ARIAExpanded } from './ARIAExpanded'
import { ARIAOrientation } from './ARIAOrientation'
import { Role } from './Role'
import { RoleComposite } from './RoleComposite'

/**
 * A form widget that allows the user to make selections from a set of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#select
 * @mixes RoleGroup
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
}

export { RoleSelect as Select }

Role.Select = RoleSelect
