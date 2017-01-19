import { Composite } from './composite'

export class Grid extends Composite {

    set level(level) {
        this.node.setAttribute('aria-level', level)
    }

    get level() {
        return this.node.getAttribute('aria-level')
    }

    set multiselectable(multiselectable) {
        this.node.setAttribute('aria-multiselectable', multiselectable)
    }

    get multiselectable() {
        return this.node.getAttribute('aria-multiselectable')
    }

    set readOnly(readOnly) {
        this.node.setAttribute('aria-readonly', readOnly)
    }

    get readOnly() {
        return this.node.getAttribute('aria-readonly')
    }
}
