import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A definition of a term or concept.
 * @see https://www.w3.org/TR/wai-aria-1.1/#definition
 */
export class RoleDefinition extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleDefinition as Definition }

Role.Definition = RoleDefinition
