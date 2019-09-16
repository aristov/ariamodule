import { Role } from './Role'
import { RoleLandmark } from './RoleLandmark'

/**
 * @summary A region that contains mostly site-oriented content, rather than page-specific content.
 * @see https://www.w3.org/TR/wai-aria-1.1/#banner
 */
export class RoleBanner extends RoleLandmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleBanner as Banner, RoleBanner as ARIABanner }

Role.Banner = RoleBanner
