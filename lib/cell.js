import { Section } from './section'

export class Cell extends Section {

    set colIndex(colIndex) {
        this.node.setAttribute('aria-colindex', colIndex)
    }

    get colIndex() {
        return this.node.getAttribute('aria-colindex')
    }

    set colSpan(colSpan) {
        this.node.setAttribute('aria-colspan', colSpan)
    }

    get colSpan() {
        return this.node.getAttribute('aria-colspan')
    }

    set rowIndex(rowIndex) {
        this.node.setAttribute('aria-rowIndex', rowIndex)
    }

    get rowIndex() {
        return this.node.getAttribute('aria-rowIndex')
    }

    set rowSpan(rowSpan) {
        this.node.setAttribute('aria-rowSpan', rowSpan)
    }

    get rowSpan() {
        return this.node.getAttribute('aria-rowSpan')
    }
}
