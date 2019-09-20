import { ARIAOrientation } from './ARIAOrientation'
import { Role } from './Role'
import { RoleGroup } from './RoleGroup'

/**
 * A collection of commonly used function buttons
 *  or controls represented in compact visual form.
 * @see https://www.w3.org/TR/wai-aria-1.1/#toolbar
 */
export class RoleToolBar extends RoleGroup {
    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(ARIAOrientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(ARIAOrientation) || 'horizontal'
    }
}

export { RoleToolBar as ToolBar }

Role.ToolBar = RoleToolBar
