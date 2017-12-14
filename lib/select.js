import { Composite } from './composite'
import { Orientation } from './aria'
import { Form } from './form'

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
