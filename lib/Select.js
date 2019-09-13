import { Role } from './Role'
import { Composite } from './Composite'
import { Form } from './Form'
import { Expanded } from './aria/Expanded'
import { Orientation } from './aria/Orientation'

/**
 * @summary A form widget that allows the user to make selections from a set of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#select
 * @abstract
 */
export class Select extends Composite {
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
     * @returns {Form|null}
     */
    get form() {
        return this.closest(Form)
    }
}

export { Select as ARIASelect }

Role.Select = Select
