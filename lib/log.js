import { Section } from './section'
import { Live } from './aria'

/**
 * @summary A type of live region where new information is added
 *  in meaningful order and old information may disappear.
 * @see https://www.w3.org/TR/wai-aria-1.1/#log
 */
export class Log extends Section {
    /**
     * @param {String} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.hasAttribute(Live)? super.live : 'polite'
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Log}
 */
export function log(init) {
    return new Log(init)
}
