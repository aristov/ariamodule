import { Td } from 'htmlmodule'
import { Table } from './table'
import { Section } from './section'
import { ColIndex, RowIndex } from './aria'

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
        this.setAttribute(ColIndex, String(colIndex))
    }

    /**
     * @returns {Number}
     */
    get colIndex() {
        const index = this.getAttribute(ColIndex)
        return isNaN(index)? this.ownerElement.elementIndex : index
    }

    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        if(colSpan > 1) {
            this.ownerElement.node.colSpan = colSpan
        }
        else this.removeAttribute('colspan')
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return this.ownerElement.node.colSpan
    }

    /**
     * @returns {Row|null}
     */
    get row() {
        return this.parentNode.role
    }

    /**
     * @param {Number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.setAttribute(RowIndex, rowIndex)
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        const index = this.getAttribute(RowIndex)
        return isNaN(index)? this.row.rowIndex : index
    }

    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        if(rowSpan > 1) {
            this.ownerElement.node.rowSpan = rowSpan
        }
        else this.removeAttribute('rowspan')
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return this.ownerElement.node.rowSpan
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(Table)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Td
    }
}

/**
 * @param {*} init
 * @returns {Cell}
 */
export function cell(...init) {
    return new Cell(...init)
}
