import { Section } from './section'

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
}
