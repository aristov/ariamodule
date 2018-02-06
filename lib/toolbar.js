import { Group } from './group'
import { Orientation } from './aria'

/**
 * A collection of commonly used function buttons
 * or controls represented in compact visual form.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#toolbar
 */
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
