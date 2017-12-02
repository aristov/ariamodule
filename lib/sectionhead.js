import { Structure } from './structure'
import { Expanded } from './aria'

export class SectionHead extends Structure {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(Expanded)
    }
}
