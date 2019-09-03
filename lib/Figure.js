import { Role } from './Role'
import { Section } from './Section'

/**
 * @summary A perceivable section of content that typically contains
 *  a graphical document, images, code snippets, or example text.
 * @see https://www.w3.org/TR/wai-aria-1.1/#figure
 */
export class Figure extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export const ARIAFigure = Role.Figure = Figure
