import { Section } from './section'

/**
 * @summary On-screen descriptive text for a figure or table in the page.
 * @see https://www.w3.org/TR/wai-aria-1.2/#caption
 */
export class Caption extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}
