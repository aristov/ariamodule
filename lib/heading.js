import { SectionHead } from './sectionhead'
import { Level } from './aria/level'

/**
 * @summary A heading for a section of the page.
 * @see https://www.w3.org/TR/wai-aria-1.1/#heading
 */
export class Heading extends SectionHead {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttribute(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttribute(Level)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Heading}
 */
export function heading(init) {
    return new Heading(init)
}
