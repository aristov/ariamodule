import { Td } from 'htmlmodule'
import { Table } from './table'
import { Section } from './section'
import { ColIndex, RowIndex } from './aria'

/**
 * @summary A cell in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#cell
 */
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
        return isNaN(index)? this.ownerElement.cellIndex : index
    }

    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        if(colSpan > 1) {
            this.ownerElement.colSpan = colSpan
        }
        else this.removeAttribute('colspan')
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return this.ownerElement.colSpan
    }

    /**
     * @returns {Row|null}
     */
    get row() {
        const parentNode = this.parentNode
        return parentNode && parentNode.role
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
            this.ownerElement.rowSpan = rowSpan
        }
        else this.removeAttribute('rowspan')
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return this.ownerElement.rowSpan
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
 * @param {*} [init]
 * @returns {Cell}
 */
export function cell(init) {
    return new Cell(init)
}
