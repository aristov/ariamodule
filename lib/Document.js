import { Structure } from './Structure'
import { Expanded } from './aria/Expanded'

/**
 * @summary An element containing content that assistive
 *  technology users may want to browse in a reading mode.
 * @see https://www.w3.org/TR/wai-aria-1.1/#document
 *
 * Not to be confused with the native Document interface of the DOM standard
 * @see https://www.w3.org/TR/dom/#document
 */
export class Document extends Structure {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}
