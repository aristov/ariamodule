import { Widget } from './widget'
import { ActiveDescendant } from './aria'

/**
 * A widget that may contain navigable descendants or owned children.
 * https://www.w3.org/TR/wai-aria-1.1/#composite
 */
export class Composite extends Widget {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
    }
}
