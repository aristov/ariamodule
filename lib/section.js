import { Structure } from './structure'

export class Section extends Structure {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        if(expanded) {
            this.node.setAttribute('aria-expanded', expanded)
        }
        else this.node.removeAttribute('aria-expanded')
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.node.getAttribute('aria-expanded') || ''
    }
}
