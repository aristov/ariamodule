import { Role } from './Role'
import { RoleType } from './RoleType'
import { Expanded } from './aria/Expanded'
import { Modal } from './aria/Modal'

/**
 * @summary A browser or application window.
 * @see https://www.w3.org/TR/wai-aria-1.1/#window
 * @abstract
 *
 * Not to be confused with the native Window interface of the HTML standard
 * @see https://www.w3.org/TR/html/single-page.html#the-window-object
 */
export class Window extends RoleType {
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
}

export { Window as ARIAWindow }

Role.Window = Window
