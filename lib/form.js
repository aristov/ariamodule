import { Form as HTMLForm } from 'htmlmodule'
import { Landmark } from './landmark'

/**
 * @summary A landmark region that contains a collection of items and objects that,
 *  as a whole, combine to create a form.
 * @see https://www.w3.org/TR/wai-aria-1.1/#form
 */
export class Form extends Landmark {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return HTMLForm
    }
}

/**
 * @param {*} [init]
 * @returns {Form}
 */
export function form(...init) {
    return new Form(...init)
}
