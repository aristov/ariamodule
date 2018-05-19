import { Structure } from './structure'
import { Expanded } from './aria/expanded'

/**
 * @summary An element containing content that assistive
 *  technology users may want to browse in a reading mode.
 * @see https://www.w3.org/TR/wai-aria-1.1/#document
 *
 * The `ARIA` prefix is used to avoid a conflict
 *  with the native `Document` interface from the DOM standard
 *  https://www.w3.org/TR/dom/#document
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
}

/**
 * @param {*} [init]
 * @returns {ARIADocument}
 */
export function document(init) {
    return new ARIADocument(init)
}
