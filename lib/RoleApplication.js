import { ARIAActiveDescendant } from './ARIAActiveDescendant'
import { Role } from './Role'
import { RoleStructure } from './RoleStructure'

/**
 * A structure containing one or more focusable elements requiring user input,
 *  such as keyboard or gesture events, that do not follow a standard interaction
 *  pattern supported by a widget role.
 * @see https://www.w3.org/TR/wai-aria-1.1/#application
 */
export class RoleApplication extends RoleStructure {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ARIAActiveDescendant, activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttr(ARIAActiveDescendant)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleApplication as Application }

Role.Application = RoleApplication
