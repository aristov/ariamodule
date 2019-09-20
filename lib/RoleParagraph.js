import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A paragraph of content.
 * @see https://www.w3.org/TR/wai-aria-1.2/#paragraph
 */
export class RoleParagraph extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleParagraph as Paragraph }

Role.Paragraph = RoleParagraph
