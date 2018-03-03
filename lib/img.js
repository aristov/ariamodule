import { Div } from 'htmlmodule'
import { Section } from './section'

/**
 * A container for a collection of elements that form an image.
 * https://www.w3.org/TR/wai-aria-1.1/#img
 */
export class Img extends Section {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {Img}
 */
export function img(...init) {
    return new Img(...init)
}
