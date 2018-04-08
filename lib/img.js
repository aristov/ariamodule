import { Section } from './section'

/**
 * @summary A container for a collection of elements that form an image.
 * @see https://www.w3.org/TR/wai-aria-1.1/#img
 */
export class Img extends Section {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Img}
 */
export function img(...init) {
    return new Img(...init)
}
