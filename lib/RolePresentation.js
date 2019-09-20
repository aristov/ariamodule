import { Role } from './Role'
import { RoleStructure } from './RoleStructure'

/**
 * An element whose implicit native role semantics will not be mapped to the accessibility API.
 * @see https://www.w3.org/TR/wai-aria-1.1/#presentation
 */
export class RolePresentation extends RoleStructure {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RolePresentation as Presentation }

Role.Presentation = RolePresentation
