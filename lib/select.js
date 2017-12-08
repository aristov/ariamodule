import { Group } from './group'
import { Orientation } from './aria'

export class Select extends Group {
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
     * @returns {Boolean}
     */
    static get abstract() {
        return true
    }
}
