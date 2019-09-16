import { Role } from './Role'
import { RoleComposite } from './RoleComposite'
import { RoleForm } from './RoleForm'
import { Expanded } from './aria/Expanded'
import { Orientation } from './aria/Orientation'

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
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(Orientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(Orientation)
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
