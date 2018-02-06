import { Composite } from './composite'
import { Orientation } from './aria'
import { Form } from './form'

/**
 * A form widget that allows the user to make selections from a set of choices.
 * https://www.w3.org/TR/wai-aria-1.1/#select
 */
export class Select extends Composite {
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
