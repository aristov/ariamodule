import { Role } from './Role'
import { RoleCommand } from './RoleCommand'
import { RoleDialog } from './RoleDialog'
import { RoleForm } from './RoleForm'
import { RoleMenu } from './RoleMenu'
import { ARIAExpanded } from './ARIAExpanded'
import { ARIAPressed } from './ARIAPressed'

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
     * @returns {RoleDialog|*|null}
     */
    get dialog() {
        return this.controls.filter(instance => instance instanceof RoleDialog)[0] || null
    }

    /**
     * @returns {RoleForm|*|null}
     */
    get form() {
        return this.closest(RoleForm)
    }

    /**
     * @returns {RoleMenu|*|null}
     */
    get menu() {
        return this.controls.filter(instance => instance instanceof RoleMenu)[0] || null
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

export { RoleButton as Button, RoleButton as ARIAButton }

Role.Button = RoleButton
