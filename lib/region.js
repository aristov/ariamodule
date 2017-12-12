import { Landmark } from './landmark'

/**
 * A perceivable section containing content that is relevant to a specific, author-specified
 * purpose and sufficiently important that users will likely want to be able to navigate
 * to the section easily and to have it listed in a summary of the page.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#region
 */
export class Region extends Landmark {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {...*} [init]
 * @returns {Region}
 */
export function region(...init) {
    return new Region(...init)
}