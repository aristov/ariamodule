import { Landmark } from './landmark'

const LOCAL_NAME = 'footer'

export class ContentInfo extends Landmark {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} init
 * @returns {ContentInfo}
 */
export function contentInfo(...init) {
    return new ContentInfo(...init)
}
