import { Role } from './Role'
import { Structure } from './Structure'
import { ActiveDescendant } from './aria/ActiveDescendant'

/**
 * @summary A structure containing one or more focusable elements requiring user input,
 *  such as keyboard or gesture events, that do not follow a standard interaction
 *  pattern supported by a widget role.
 * @see https://www.w3.org/TR/wai-aria-1.1/#application
 */
export class Application extends Structure {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttr(ActiveDescendant)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.Application = Application
