import { ARIALevel } from './ARIALevel'
import { Role } from './Role'
import { RoleSectionHead } from './RoleSectionHead'

/**
 * A heading for a section of the page.
 * @see https://www.w3.org/TR/wai-aria-1.1/#heading
 */
export class RoleHeading extends RoleSectionHead {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(ARIALevel, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(ARIALevel)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleHeading as Heading }

Role.Heading = RoleHeading
