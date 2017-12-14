import { Composite } from './composite'
import { Orientation } from './aria'

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
}
