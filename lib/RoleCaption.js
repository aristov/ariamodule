import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * @summary On-screen descriptive text for a figure or table in the page.
 * @see https://www.w3.org/TR/wai-aria-1.2/#caption
 */
export class RoleCaption extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleCaption as Caption, RoleCaption as ARIACaption }

Role.Caption = RoleCaption
