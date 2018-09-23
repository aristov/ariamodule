import { Role } from './Role'
import { Structure } from './Structure'
import { Expanded } from './aria/Expanded'

/**
 * @summary A renderable structural containment unit in a document or application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#section
 * @abstract
 */
export class Section extends Structure {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }
}

Role.Section = Section
