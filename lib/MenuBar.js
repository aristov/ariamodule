import { Menu } from './Menu'
import { Role } from './Role'
import { Orientation } from './aria/Orientation'

/**
 * @summary A presentation of menu that usually remains visible
 *  and is usually presented horizontally.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menubar
 */
export class MenuBar extends Menu {
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
        return this.hasAttr(Orientation)? this.getAttr(Orientation) : 'horizontal'
    }
}

export const ARIAMenuBar = Role.MenuBar = MenuBar
