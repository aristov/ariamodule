import { Div } from 'htmlmodule'
import { List } from './list'

/**
 * A scrollable list of articles where scrolling may cause
 * articles to be added to or removed from either end of the list.
 * https://www.w3.org/TR/wai-aria-1.1/#feed
 */
export class Feed extends List {
    /**
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {...*} [init]
 * @returns {Feed}
 */
export function feed(...init) {
    return new Feed(...init)
}
