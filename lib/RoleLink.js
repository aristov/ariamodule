import { ARIAExpanded } from './ARIAExpanded'
import { Role } from './Role'
import { RoleCommand } from './RoleCommand'

/**
 * An interactive reference to an internal or external resource that,
 *  when activated, causes the user agent to navigate to that resource.
 * @see https://www.w3.org/TR/wai-aria-1.1/#link
 */
export class RoleLink extends RoleCommand {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(ARIAExpanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(ARIAExpanded)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleLink as Link }

Role.Link = RoleLink
