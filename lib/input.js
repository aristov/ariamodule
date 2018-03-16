import { Form } from './form'
import { Widget } from './widget'

/**
 * @summary A generic type of widget that allows user input.
 * @see https://www.w3.org/TR/wai-aria-1.1/#input
 */
export class Input extends Widget {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(Form)
    }
}
