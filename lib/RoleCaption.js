import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * On-screen descriptive text for a figure or table in the page.
 * @see https://www.w3.org/TR/wai-aria-1.2/#caption
 */
export class RoleCaption extends RoleSection {
    /**
     * @returns {RoleTable|*}
     */
    get table() {
        return this.closest(Role.Table)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleCaption as Caption }

Role.Caption = RoleCaption
