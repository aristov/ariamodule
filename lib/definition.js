import { Section } from './section'

/**
 * @summary A definition of a term or concept.
 * @see https://www.w3.org/TR/wai-aria-1.1/#definition
 */
export class Definition extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {Definition}
 */
export function definition(init) {
    return new Definition(init)
}
