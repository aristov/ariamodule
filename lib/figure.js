import { Section } from './section'

/**
 * A perceivable section of content that typically contains
 * a graphical document, images, code snippets, or example text.
 * https://www.w3.org/TR/wai-aria-1.1/#figure
 */
export class Figure extends Section {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {...*} [init]
 * @returns {Figure}
 */
export function figure(...init) {
    return new Figure(...init)
}
