import { Role } from './Role'
import { Section } from './Section'

/**
 * @summary A section of content that is quoted from another source.
 * @see https://www.w3.org/TR/wai-aria-1.2/#blockquote
 */
export class BlockQuote extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.BlockQuote = BlockQuote
