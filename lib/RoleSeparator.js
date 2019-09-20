import { Role } from './Role'
import { RoleStructure } from './RoleStructure'

/**
 * A divider that separates and distinguishes sections of content or groups of menuitems.
 * @see https://www.w3.org/TR/wai-aria-1.1/#separator
 * @mixes RoleWidget
 */
export class RoleSeparator extends RoleStructure {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleSeparator as Separator }

Role.Separator = RoleSeparator
