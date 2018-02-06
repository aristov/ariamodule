import { Footer } from 'htmlmodule'
import { Landmark } from './landmark'

/**
 * A large perceivable region that contains information about the parent document.
 * https://www.w3.org/TR/wai-aria-1.1/#contentinfo
 */
export class ContentInfo extends Landmark {
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
        return Footer
    }
}

/**
 * @param {*} init
 * @returns {ContentInfo}
 */
export function contentInfo(...init) {
    return new ContentInfo(...init)
}
