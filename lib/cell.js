import { Table } from './table'
import { Section } from './section'

const LOCAL_NAME = 'td'

export class Cell extends Section {
    /**
     * @returns {RowGroup|null}
     */
    get body() {
        const row = this.row
        return row? row.body : null
    }

    /**
     * @param {Number} colIndex
     */
    set colIndex(colIndex) {
        this.node.setAttribute('aria-colindex', String(colIndex))
    }

    /**
     * @returns {Number}
     */
    get colIndex() {
        const index = this.node.getAttribute('aria-colindex')
        return index? Number(index) : this.elementIndex
    }

    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        if(colSpan > 1) this.node.colSpan = colSpan
        else this.node.removeAttribute('colspan')
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return this.node.colSpan
    }

    /**
     * @returns {Row|null}
     */
    get row() {
        return this.parentNode
    }

    /**
     * @param {Number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.node.setAttribute('aria-rowindex', String(rowIndex))
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        const index = this.node.getAttribute('aria-rowindex')
        return index? Number(index) : this.row.rowIndex
    }

    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        if(rowSpan > 1) this.node.rowSpan = rowSpan
        else this.node.removeAttribute('rowspan')
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return this.node.rowSpan
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(Table)
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} init
 * @returns {Cell}
 */
export function cell(...init) {
    return new Cell(...init)
}
