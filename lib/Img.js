import { Role } from './Role'
import { Section } from './Section'

/**
 * @summary A container for a collection of elements that form an image.
 * @see https://www.w3.org/TR/wai-aria-1.1/#img
 */
export class Img extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIAImg = Role.Img = Img
