import { Section } from './section'
import { Atomic, Live } from './aria'

/**
 * @summary A type of live region with important, and usually time-sensitive, information.
 * @see https://www.w3.org/TR/wai-aria-1.1/#alert
 */
export class Alert extends Section {
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
        return this.hasAttribute(Live)? super.live : 'assertive'
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
 * @param {...*} [init]
 * @returns {Alert}
 */
export function alert(...init) {
    return new Alert(...init)
}
