import { Section } from './Section'

/**
 * @summary A paragraph of content.
 * @see https://www.w3.org/TR/wai-aria-1.2/#paragraph
 */
export class Paragraph extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}
