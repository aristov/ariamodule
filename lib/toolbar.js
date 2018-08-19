import { Group } from './group'
import { Orientation } from './aria/orientation'

/**
 * @summary A collection of commonly used function buttons
 *  or controls represented in compact visual form.
 * @see https://www.w3.org/TR/wai-aria-1.1/#toolbar
 */
export class Toolbar extends Group {
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
        return this.getAttribute(Orientation) || 'horizontal'
    }
}

/**
 * @param {*} [init]
 * @returns {Toolbar}
 */
export function toolbar(init) {
    return new Toolbar(init)
}
