import { Role } from './Role'
import { RoleLandmark } from './RoleLandmark'

/**
 * A large perceivable region that contains information about the parent document.
 * @see https://www.w3.org/TR/wai-aria-1.1/#contentinfo
 */
export class RoleContentInfo extends RoleLandmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleContentInfo as ContentInfo }

Role.ContentInfo = RoleContentInfo
