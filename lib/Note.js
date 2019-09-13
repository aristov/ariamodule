import { Role } from './Role'
import { Section } from './Section'

/**
 * @summary A section whose content is parenthetic or ancillary to the main content of the resource.
 * @see https://www.w3.org/TR/wai-aria-1.1/#note
 */
export class Note extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { Note as ARIANote }

Role.Note = Note
