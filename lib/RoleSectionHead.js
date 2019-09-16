import { Role } from './Role'
import { RoleStructure } from './RoleStructure'
import { Expanded } from './aria/Expanded'

/**
 * @summary A structure that labels or summarizes the topic of its related section.
 * @see https://www.w3.org/TR/wai-aria-1.1/#sectionhead
 * @abstract
 */
export class RoleSectionHead extends RoleStructure {
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

export { RoleSectionHead as SectionHead, RoleSectionHead as ARIASectionHead }

Role.SectionHead = RoleSectionHead
