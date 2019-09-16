import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * @summary A perceivable section of content that typically contains
 *  a graphical document, images, code snippets, or example text.
 * @see https://www.w3.org/TR/wai-aria-1.1/#figure
 */
export class RoleFigure extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleFigure as Figure, RoleFigure as ARIAFigure }

Role.Figure = RoleFigure
