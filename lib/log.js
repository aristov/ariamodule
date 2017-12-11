import { Section } from './section'

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
        return super.live || 'polite'
    }
}
