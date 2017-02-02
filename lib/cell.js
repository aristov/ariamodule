import { Section } from './section'

export class Cell extends Section {

    set colIndex(colIndex) {
        this.node.setAttribute('aria-colindex', colIndex)
    }

    get colIndex() {
        return this.node.getAttribute('aria-colindex') || this.index
    }

    set colSpan(colSpan) {
        this.node.colSpan = colSpan
    }

    get colSpan() {
        return this.node.colSpan
    }

    set rowIndex(rowIndex) {
        this.node.setAttribute('aria-rowindex', rowIndex)
    }

    get rowIndex() {
        return this.node.getAttribute('aria-rowindex') || this.row.rowIndex
    }

    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan
    }

    get rowSpan() {
        return this.node.rowSpan
    }

    static get role() {
        return 'cell'
    }

    static get classList() {
        return 'cell'
    }
}
