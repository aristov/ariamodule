import { Landmark } from './Landmark'

/**
 * @summary A supporting section of the document, designed to be complementary
 *  to the main content at a similar level in the DOM hierarchy,
 *  but remains meaningful when separated from the main content.
 * @see https://www.w3.org/TR/wai-aria-1.1/#complementary
 */
export class Complementary extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}
