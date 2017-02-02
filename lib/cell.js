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
        this.node.setAttribute('aria-rowindex', rowIndex)
    }

    get rowIndex() {
        return this.node.getAttribute('aria-rowindex')
    }

    set rowSpan(rowSpan) {
        this.node.setAttribute('aria-rowspan', rowSpan)
    }

    get rowSpan() {
        return this.node.getAttribute('aria-rowspan')
    }

    static get role() {
        return 'cell'
    }

    static get classList() {
        return 'cell'
    }
}
