import { Role } from './Role'
import { Landmark } from './Landmark'

/**
 * @summary A collection of navigational elements (usually links)
 *  for navigating the document or related documents.
 * @see https://www.w3.org/TR/wai-aria-1.1/#navigation
 */
export class Navigation extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.Navigation = Navigation
