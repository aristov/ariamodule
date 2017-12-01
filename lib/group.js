import { Section } from './section'

const LOCAL_NAME = 'span'

export class Group extends Section {
    set activeDescendant(activeDescendant) {
        this.node.setAttribute('aria-activedescendant', activeDescendant)
    }

    get activeDescendant() {
        return this.node.getAttribute('aria-activedescendant')
    }

    static get localName() {
        return LOCAL_NAME
    }

    static get abstract() {
        return false
    }
}

export function group(...init) {
    return new Group(...init)
}
