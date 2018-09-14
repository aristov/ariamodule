import { Section } from './section'
import { Atomic } from './aria/atomic'
import { Live } from './aria/live'

/**
 * @summary A type of live region whose content is advisory information
 *  for the user but is not important enough to justify an alert,
 *  often but not necessarily presented as a status bar.
 * @see https://www.w3.org/TR/wai-aria-1.1/#status
 */
export class Status extends Section {
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
     * @param {boolean} atomic
     */
    set atomic(atomic) {
        super.atomic = atomic
    }

    /**
     * @returns {boolean}
     */
    get atomic() {
        return this.hasAttr(Atomic)? super.atomic : true
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {Status}
 */
export function status(init) {
    return new Status(init)
}
