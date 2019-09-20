import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A contextual popup that displays a description for an element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tooltip
 */
export class RoleToolTip extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleToolTip as ToolTip }

Role.ToolTip = RoleToolTip
