import { RoleType } from './roletype'
import { Expanded, Modal } from './aria'

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
