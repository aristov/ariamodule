import { Group } from './group'
import { Orientation } from './aria'

export class Toolbar extends Group {
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

/**
 * @param {*} [init]
 * @returns {Toolbar}
 */
export function toolbar(...init) {
    return new Toolbar(...init)
}
