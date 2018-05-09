import { List } from './list'

/**
 * @summary A scrollable list of articles where scrolling may cause
 *  articles to be added to or removed from either end of the list.
 * @see https://www.w3.org/TR/wai-aria-1.1/#feed
 */
export class Feed extends List {}

/**
 * @param {*} [init]
 * @returns {Feed}
 */
export function feed(init) {
    return new Feed(init)
}
