import { Role } from './Role'
import { Section } from './Section'

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

Role.Definition = Definition
