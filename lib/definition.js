import { Section } from './section'

/**
 * A definition of a term or concept.
 * https://www.w3.org/TR/wai-aria-1.1/#definition
 */
export class Definition extends Section {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {...*} [init]
 * @returns {Definition}
 */
export function definition(...init) {
    return new Definition(...init)
}
