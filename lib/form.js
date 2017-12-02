import { Form as HTMLForm } from 'htmlmodule'
import { Landmark } from './landmark'

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
