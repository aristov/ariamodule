import { Select } from './select'

export class Tree extends Select {

    /**
     *
     * @param {boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.node.setAttribute('aria-multiselectable', String(multiselectable))
    }

    /**
     *
     * @returns {boolean}
     */
    get multiselectable() {
        return this.node.getAttribute('aria-multiselectable') === 'true'
    }

    /**
     *
     * @param {Boolean} required
     */
    set required(required) {
        if(required) this.node.setAttribute('aria-required', 'true')
        else this.node.removeAttribute('aria-required')
    }

    /**
     *
     * @returns {Boolean}
     */
    get required() {
        return this.node.getAttribute('aria-required') === 'true'
    }

    /**
     *
     * @returns {Array}
     */
    get items() {
        return Array.prototype.map.call(
            this.node.querySelectorAll('[role~=treeitem]'),
            ({ assembler }) => assembler)
    }

    set children(children) {
        super.children = children
        const first = this.items[0]
        if(first) first.tabIndex = 0
    }

    static get abstract() {
        return false
    }
}

export function tree(init) {
    return new Tree('div', init)
}
