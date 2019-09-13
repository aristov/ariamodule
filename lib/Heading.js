import { Role } from './Role'
import { SectionHead } from './SectionHead'
import { Level } from './aria/Level'

/**
 * @summary A heading for a section of the page.
 * @see https://www.w3.org/TR/wai-aria-1.1/#heading
 */
export class Heading extends SectionHead {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(Level)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { Heading as ARIAHeading }

Role.Heading = Heading
