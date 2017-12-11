import { Section } from './section'

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
        return super.live || 'off'
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
