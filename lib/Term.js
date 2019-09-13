import { Role } from './Role'
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
}

export { Term as ARIATerm }

Role.Term = Term
