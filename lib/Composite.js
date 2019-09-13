import { Role } from './Role'
import { Widget } from './Widget'
import { ActiveDescendant } from './aria/ActiveDescendant'

/**
 * @summary A widget that may contain navigable descendants or owned children.
 * @see https://www.w3.org/TR/wai-aria-1.1/#composite
 * @abstract
 */
export class Composite extends Widget {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttr(ActiveDescendant)
    }
}

export { Composite as ARIAComposite }

Role.Composite = Composite
