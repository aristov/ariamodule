import { Span } from 'htmlmodule/lib/span'
import { Section } from './section'

/**
 * @summary A word or phrase with a corresponding definition.
 * @see https://www.w3.org/TR/wai-aria-1.1/#term
 */
export class Term extends Section {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Span
    }
}

/**
 * @param {*} [init]
 * @returns {Term}
 */
export function term(init) {
    return new Term(init)
}
