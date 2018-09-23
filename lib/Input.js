import { Role } from './Role'
import { Widget } from './Widget'
import { Form } from './Form'

/**
 * @summary A generic type of widget that allows user input.
 * @see https://www.w3.org/TR/wai-aria-1.1/#input
 * @abstract
 */
export class Input extends Widget {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(Form)
    }
}

Role.Input = Input
