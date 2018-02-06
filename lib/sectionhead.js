import { Structure } from './structure'
import { Expanded } from './aria'

/**
 * A structure that labels or summarizes the topic of its related section.
 * https://www.w3.org/TR/wai-aria-1.1/#sectionhead
 */
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
