import { Role } from './Role'
import { Group } from './Group'
import { Orientation } from './aria/Orientation'

/**
 * @summary A collection of commonly used function buttons
 *  or controls represented in compact visual form.
 * @see https://www.w3.org/TR/wai-aria-1.1/#toolbar
 */
export class ToolBar extends Group {
    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(Orientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(Orientation) || 'horizontal'
    }
}

export const ARIAToolBar = Role.ToolBar = ToolBar
