import { Section } from './section'

export class ListItem extends Section {

    set level(level) {
        this.node.setAttribute('aria-level', level)
    }

    get level() {
        this.node.getAttribute('aria-level')
    }

    set posInSet(posInSet) {
        this.node.setAttribute('aria-posinset', posInSet)
    }

    get posInSet() {
        return this.node.getAttribute('aria-posinset')
    }

    set setSize(setSize) {
        this.node.setAttribute('aria-setsize', setSize)
    }

    get setSize() {
        return this.node.getAttribute('aria-setsize')
    }

    static get abstract() {
        return false
    }
}
