import { Div } from 'htmlmodule'
import { Structure } from './structure'
import { Expanded } from './aria'

/**
 * An element containing content that assistive
 * technology users may want to browse in a reading mode.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#document
 *
 * The `ARIA` prefix is used to avoid a confilct
 * with the native `Document` interface from the DOM standard
 * https://www.w3.org/TR/dom/#document
 */
export class ARIADocument extends Structure {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(Expanded)
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

    /**
     * @returns {String}
     */
    static get role() {
        return this === ARIADocument? ROLE_TYPE : super.role
    }
}

/**
 * @param {*} [init]
 * @returns {ARIADocument}
 */
export function document(...init) {
    return new ARIADocument(...init)
}

const ROLE_TYPE = document.name
