import { Footer } from 'htmlmodule'
import { Landmark } from './landmark'

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
