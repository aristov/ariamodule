import { Role } from './Role'
import { Landmark } from './Landmark'

/**
 * @summary A large perceivable region that contains information about the parent document.
 * @see https://www.w3.org/TR/wai-aria-1.1/#contentinfo
 */
export class ContentInfo extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.ContentInfo = ContentInfo
