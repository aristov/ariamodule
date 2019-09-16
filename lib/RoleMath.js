import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * @summary Content that represents a mathematical expression.
 * @see https://www.w3.org/TR/wai-aria-1.1/#math
 */
export class RoleMath extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleMath as Math, RoleMath as ARIAMath }

Role.Math = RoleMath
