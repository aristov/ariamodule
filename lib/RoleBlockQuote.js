import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A section of content that is quoted from another source.
 * @see https://www.w3.org/TR/wai-aria-1.2/#blockquote
 */
export class RoleBlockQuote extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleBlockQuote as BlockQuote }

Role.BlockQuote = RoleBlockQuote
