import { Composite } from './composite'
import { NodeInit } from 'htmlmodule'

export class Grid extends Composite {

    constructor(object, init) {
        super(object, {
            role : 'grid',
            className : 'grid'
        })
        if(init) this.init(NodeInit(init))
    }

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

export function grid(init) {
    return new Grid('table', init)
}
