import { Section } from './section'

const { map, filter } = Array.prototype

export class Table extends Section {

    set colCount(colCount) {
        this.node.setAttribute('aria-colcount', colCount)
    }

    get colCount() {
        return this.node.getAttribute('aria-colcount')
    }

    set rowCount(rowCount) {
        this.node.setAttribute('aria-rowcount', rowCount)
    }

    get rowCount() {
        return this.node.getAttribute('aria-rowcount')
    }

    get head() {
        return this.node.tHead.assembler
    }

    get bodies() {
        return map.call(this.node.tBodies, ({ assembler }) => assembler)
    }

    get rows() {
        const handler = ({ assembler }) => assembler
        return filter.call(this.node.rows, handler).map(handler)
    }

    get cells() {
        const selector = 'td[role~=cell]'
        const collection = this.node.querySelectorAll(selector)
        const handler = ({ assembler }) => assembler
        return map.call(collection, handler)
    }

    static get abstract() {
        return false
    }
}
