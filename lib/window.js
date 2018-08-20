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
     * @param {boolean} modal
     */
    set modal(modal) {
        this.setAttr(Modal, modal)
    }

    /**
     * @returns {boolean}
     */
    get modal() {
        return this.getAttr(Modal)
    }

    /**
     * @returns {string}
     */
    static get elementAssembler() {
        return Div
    }
}
