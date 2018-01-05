import { Div } from 'htmlmodule'
import { Structure } from './structure'
import { ActiveDescendant } from './aria'

/**
 * A structure containing one or more focusable elements requiring user input,
 * such as keyboard or gesture events, that do not follow a standard interaction
 * pattern supported by a widget role.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#application
 */
export class Application extends Structure {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
    }

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
        return Div
    }
}

/**
 * @param {*} init
 * @returns {Application}
 */
export function application(...init) {
    return new Application(...init)
}
