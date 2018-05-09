import { Section } from './section'
import { Atomic, Live } from './aria'

/**
 * @summary A type of live region whose content is advisory information
 *  for the user but is not important enough to justify an alert,
 *  often but not necessarily presented as a status bar.
 * @see https://www.w3.org/TR/wai-aria-1.1/#status
 */
export class Status extends Section {
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
     * @param {Boolean} atomic
     */
    set atomic(atomic) {
        super.atomic = atomic
    }

    /**
     * @returns {Boolean}
     */
    get atomic() {
        return this.hasAttribute(Atomic)? super.atomic : true
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
 * @returns {Status}
 */
export function status(init) {
    return new Status(init)
}
