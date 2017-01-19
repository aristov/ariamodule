import { Widget } from './widget'

export class Composite extends Widget {

    set activeDescendant(activeDescendant) {
        this.node.setAttribute('aria-activedescendant', activeDescendant)
    }

    get activeDescendant() {
        return this.node.getAttribute('aria-activedescendant')
    }
}
