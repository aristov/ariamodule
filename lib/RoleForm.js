import { Role } from './Role'
import { RoleLandmark } from './RoleLandmark'

/**
 * A landmark region that contains a collection of items and objects that,
 *  as a whole, combine to create a form.
 * @see https://www.w3.org/TR/wai-aria-1.1/#form
 */
export class RoleForm extends RoleLandmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleForm as Form }

Role.Form = RoleForm
