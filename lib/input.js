import { Widget } from './widget'
import { Form } from './form'

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
