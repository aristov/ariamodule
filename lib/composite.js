import { Widget } from './widget'

export class Composite extends Widget {

    /**
     *
     * @param {Element} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.node.setAttribute('aria-activedescendant', activeDescendant.id)
    }

    /**
     *
     * @returns {Element}
     */
    get activeDescendant() {
        const id = this.node.getAttribute('aria-activedescendant')
        return id && document.getElementById(id)
    }
}
