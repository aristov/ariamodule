import { Section } from './section'

export class Group extends Section {

    set activeDescendant(activeDescendant) {
        this.node.setAttribute('aria-activedescendant', activeDescendant)
    }

    get activeDescendant() {
        return this.node.getAttribute('aria-activedescendant')
    }

    static get abstract() {
        return false
    }
}
