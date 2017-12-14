import { Form } from './form'
import { Widget } from './widget'

export class Input extends Widget {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.closest(Form)
    }
}
