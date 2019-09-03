import { Role } from './Role'
import { Structure } from './Structure'
import { Expanded } from './aria/Expanded'

/**
 * @summary A structure that labels or summarizes the topic of its related section.
 * @see https://www.w3.org/TR/wai-aria-1.1/#sectionhead
 * @abstract
 */
export class SectionHead extends Structure {
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

export const ARIASectionHead = Role.SectionHead = SectionHead
