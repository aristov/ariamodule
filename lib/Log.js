import { Role } from './Role'
import { Section } from './Section'
import { Live } from './aria/Live'

/**
 * @summary A type of live region where new information is added
 *  in meaningful order and old information may disappear.
 * @see https://www.w3.org/TR/wai-aria-1.1/#log
 */
export class Log extends Section {
    /**
     * @param {string} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {string}
     */
    get live() {
        return this.hasAttr(Live)? super.live : 'polite'
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIALog = Role.Log = Log
