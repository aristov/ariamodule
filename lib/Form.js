import { Role } from './Role'
import { Landmark } from './Landmark'

/**
 * @summary A landmark region that contains a collection of items and objects that,
 *  as a whole, combine to create a form.
 * @see https://www.w3.org/TR/wai-aria-1.1/#form
 */
export class Form extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIAForm = Role.Form = Form
