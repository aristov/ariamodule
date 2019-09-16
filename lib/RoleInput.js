import { Role } from './Role'
import { RoleWidget } from './RoleWidget'
import { RoleForm } from './RoleForm'

/**
 * A generic type of widget that allows user input.
 * @see https://www.w3.org/TR/wai-aria-1.1/#input
 * @abstract
 */
export class RoleInput extends RoleWidget {
    /**
     * @returns {RoleForm|null}
     */
    get form() {
        return this.closest(RoleForm)
    }
}

export { RoleInput as Input, RoleInput as ARIAInput }

Role.Input = RoleInput
