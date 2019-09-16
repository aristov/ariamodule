import { RoleMenu } from './RoleMenu'
import { Role } from './Role'
import { ARIAOrientation } from './aria/ARIAOrientation'

/**
 * @summary A presentation of menu that usually remains visible
 *  and is usually presented horizontally.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menubar
 */
export class RoleMenuBar extends RoleMenu {
    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        super.orientation = orientation
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.hasAttr(ARIAOrientation)? this.getAttr(ARIAOrientation) : 'horizontal'
    }
}

export { RoleMenuBar as MenuBar, RoleMenuBar as ARIAMenuBar }

Role.MenuBar = RoleMenuBar
