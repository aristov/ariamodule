import { Section } from './section'
import { Atomic } from './aria/atomic'
import { Live } from './aria/live'

/**
 * @summary A type of live region with important, and usually time-sensitive, information.
 * @see https://www.w3.org/TR/wai-aria-1.1/#alert
 */
export class Alert extends Section {
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
        return this.hasAttr(Live)? super.live : 'assertive'
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
 * @returns {Alert}
 */
export function alert(init) {
    return new Alert(init)
}
