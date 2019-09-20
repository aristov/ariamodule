import { ARIAExpanded } from './ARIAExpanded'
import { ARIAPressed } from './ARIAPressed'
import { Role } from './Role'
import { RoleCommand } from './RoleCommand'

/**
 * An input that allows for user-triggered actions when clicked or pressed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#button
 */
export class RoleButton extends RoleCommand {
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
     * @param {boolean|string|undefined} pressed
     */
    set pressed(pressed) {
        this.setAttr(ARIAPressed, pressed)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get pressed() {
        return this.getAttr(ARIAPressed)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleButton as Button }

Role.Button = RoleButton
