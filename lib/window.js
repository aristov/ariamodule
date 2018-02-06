import { RoleType } from './roletype'
import { Expanded, Modal } from './aria'

/**
 * A browser or application window.
 * https://www.w3.org/TR/wai-aria-1.1/#window
 *
 * The `ARIA` prefix is used to avoid a confilct
 * with the native `Window` interface from the HTML standard
 * https://www.w3.org/TR/html/browsers.html#the-window-object
 */
export class ARIAWindow extends RoleType {
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
     * @param {Boolean} modal
     */
    set modal(modal) {
        this.setAttribute(Modal, modal)
    }

    /**
     * @returns {Boolean}
     */
    get modal() {
        return this.getAttribute(Modal)
    }
}
