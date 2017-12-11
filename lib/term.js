import { Section } from './section'

/**
 * A word or phrase with a corresponding definition.
 * https://www.w3.org/TR/wai-aria-1.1/#term
 */
export class Term extends Section {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {...*} [init]
 * @returns {Term}
 */
export function term(...init) {
    return new Term(...init)
}
