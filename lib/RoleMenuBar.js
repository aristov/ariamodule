import { ARIAOrientation } from './ARIAOrientation'
import { Role } from './Role'
import { RoleMenu } from './RoleMenu'

/**
 * A presentation of menu that usually remains visible
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

export { RoleMenuBar as MenuBar }

Role.MenuBar = RoleMenuBar
