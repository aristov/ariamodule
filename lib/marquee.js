import { Section } from './section'
import { Live } from './aria'

/**
 * A type of live region where non-essential information changes frequently.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#marquee
 */
export class Marquee extends Section {
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
        return this.hasAttribute(Live)? super.live : 'off'
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
 * @returns {Marquee}
 */
export function marquee(...init) {
    return new Marquee(...init)
}
