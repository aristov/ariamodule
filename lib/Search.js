import { Landmark } from './Landmark'

/**
 * @summary A landmark region that contains a collection of items and objects that,
 *  as a whole, combine to create a search facility.
 * @see https://www.w3.org/TR/wai-aria-1.1/#search
 */
export class Search extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {Search}
 */
export function search(init) {
    return new Search(init)
}
