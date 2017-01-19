import { Structure } from './structure'

export class Section extends Structure {

    set expanded(expanded) {
        this.node.setAttribute('aria-expanded', expanded)
    }

    get expanded() {
        return this.node.getAttribute('aria-expanded')
    }
}
