import { Composite } from './composite'
import { Expanded, Orientation } from './aria'
import { Form } from './form'

/**
 * @summary A form widget that allows the user to make selections from a set of choices.
 * @see https://www.w3.org/TR/wai-aria-1.1/#select
 */
export class Select extends Composite {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(Expanded)
    }

    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(Orientation, orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(Orientation)
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(Form)
    }
}
