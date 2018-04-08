import { Form } from 'htmlmodule'
import { Landmark } from './landmark'

/**
 * @summary A landmark region that contains a collection of items and objects that,
 *  as a whole, combine to create a search facility.
 * @see https://www.w3.org/TR/wai-aria-1.1/#search
 */
export class Search extends Landmark {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function} Form
     */
    static get elementAssembler() {
        return Form
    }
}

/**
 * @param {*} [init]
 * @returns {Search}
 */
export function search(...init) {
    return new Search(...init)
}
