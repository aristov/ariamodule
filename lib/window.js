import { Div } from 'htmlmodule/lib/div'
import { RoleType } from './roletype'
import { Expanded } from './aria/expanded'
import { Modal } from './aria/modal'

/**
 * @summary A browser or application window.
 * @see https://www.w3.org/TR/wai-aria-1.1/#window
 * @abstract
 *
 * The `ARIA` prefix is used to avoid a conflict
 *  with the native `Window` interface from the HTML standard
 *  https://www.w3.org/TR/html/browsers.html#the-window-object
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

    /**
     * @returns {String}
     */
    static get elementAssembler() {
        return Div
    }
}
