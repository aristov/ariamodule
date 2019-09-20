import { ARIAExpanded } from './ARIAExpanded'
import { Role } from './Role'
import { RoleStructure } from './RoleStructure'

/**
 * A structure that labels or summarizes the topic of its related section.
 * @see https://www.w3.org/TR/wai-aria-1.1/#sectionhead
 * @abstract
 */
export class RoleSectionHead extends RoleStructure {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(ARIAExpanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(ARIAExpanded)
    }
}

export { RoleSectionHead as SectionHead }

Role.SectionHead = RoleSectionHead
