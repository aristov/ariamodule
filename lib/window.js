import { RoleType } from './roletype'

export class ARIAWindow extends RoleType {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.node.setAttribute('aria-expanded', expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.node.getAttribute('aria-expanded')
    }

    /**
     * @param {Boolean} modal
     */
    set modal(modal) {
        this.node.setAttribute('aria-modal', String(modal))
    }

    /**
     * @returns {Boolean}
     */
    get modal() {
        return this.node.getAttribute('aria-modal') === 'true'
    }
}
