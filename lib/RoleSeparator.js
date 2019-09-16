import { Role } from './Role'
import { RoleStructure } from './RoleStructure'

/**
 * @summary A divider that separates and distinguishes sections of content or groups of menuitems.
 * @see https://www.w3.org/TR/wai-aria-1.1/#separator
 */
export class RoleSeparator extends RoleStructure {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleSeparator as Separator, RoleSeparator as ARIASeparator }

Role.Separator = RoleSeparator
