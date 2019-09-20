import { Role } from './Role'
import { RoleLandmark } from './RoleLandmark'

/**
 * A collection of navigational elements (usually links)
 *  for navigating the document or related documents.
 * @see https://www.w3.org/TR/wai-aria-1.1/#navigation
 */
export class RoleNavigation extends RoleLandmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleNavigation as Navigation }

Role.Navigation = RoleNavigation
