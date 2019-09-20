import { ARIAActiveDescendant } from './ARIAActiveDescendant'
import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A set of user interface objects which are not intended to be included
 *  in a page summary or table of contents by assistive technologies.
 * @see https://www.w3.org/TR/wai-aria-1.1/#group
 */
export class RoleGroup extends RoleSection {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ARIAActiveDescendant, activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttr(ARIAActiveDescendant)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleGroup as Group }

Role.Group = RoleGroup
