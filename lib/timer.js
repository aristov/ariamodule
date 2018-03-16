import { Live } from './aria'
import { Status } from './status'

/**
 * @summary A type of live region containing a numerical counter which indicates an amount
 *  of elapsed time from a start point, or the time remaining until an end point.
 * @see https://www.w3.org/TR/wai-aria-1.1/#timer
 */
export class Timer extends Status {
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
}

/**
 * @param {...*} [init]
 * @returns {Timer}
 */
export function timer(...init) {
    return new Timer(...init)
}
