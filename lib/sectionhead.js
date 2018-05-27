import { Structure } from './structure'
import { Expanded } from './aria/expanded'

/**
 * @summary A structure that labels or summarizes the topic of its related section.
 * @see https://www.w3.org/TR/wai-aria-1.1/#sectionhead
 * @abstract
 */
export class SectionHead extends Structure {
    /**
     * @param {string} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {string}
     */
    get expanded() {
        return this.getAttribute(Expanded)
    }
}
