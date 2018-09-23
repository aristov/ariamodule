import { Role } from './Role'
import { Span } from 'htmlmodule/lib/Span'
import { Section } from './Section'

/**
 * @summary A word or phrase with a corresponding definition.
 * @see https://www.w3.org/TR/wai-aria-1.1/#term
 */
export class Term extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Span
    }
}

Role.Term = Term
