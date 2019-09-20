import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A word or phrase with a corresponding definition.
 * @see https://www.w3.org/TR/wai-aria-1.1/#term
 */
export class RoleTerm extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleTerm as Term }

Role.Term = RoleTerm
