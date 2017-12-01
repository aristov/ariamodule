import { Group } from './group'

export class Toolbar extends Group {
    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.node.setAttribute('aria-orientation', orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.node.getAttribute('aria-orientation') || ''
    }
}

/**
 * @param {*} init
 * @returns {Toolbar}
 */
export function toolbar(...init) {
    return new Toolbar(...init)
}
