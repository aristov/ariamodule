import { Structure } from './structure'
import { Expanded } from './aria'

/**
 * A renderable structural containment unit in a document or application.
 * https://www.w3.org/TR/wai-aria-1.1/#section
 */
export class Section extends Structure {
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
