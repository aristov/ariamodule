import { Composite } from './composite'
import { Expanded } from './aria/expanded'
import { Orientation } from './aria/orientation'
import { Form } from './form'

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
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttribute(Expanded)
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttribute(Orientation, orientation)
    }

    /**
     * @returns {string}
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
