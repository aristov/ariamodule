import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * @summary A section whose content is parenthetic or ancillary to the main content of the resource.
 * @see https://www.w3.org/TR/wai-aria-1.1/#note
 */
export class RoleNote extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleNote as Note, RoleNote as ARIANote }

Role.Note = RoleNote
