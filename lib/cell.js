import { Td } from 'htmlmodule/lib/Td'
import { Table } from './table'
import { Section } from './section'
import { ColIndex } from './aria/colindex'
import { RowIndex } from './aria/rowindex'

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
     * @param {number} colIndex
     */
    set colIndex(colIndex) {
        this.setAttr(ColIndex, String(colIndex))
    }

    /**
     * @returns {number}
     */
    get colIndex() {
        const index = this.getAttr(ColIndex)
        return index === null?
            this.ownerElement.cellIndex :
            index
    }

    /**
     * @param {number} colSpan
     */
    set colSpan(colSpan) {
        if(colSpan > 1) {
            this.ownerElement.colSpan = colSpan
        }
        else this.removeAttr('colspan')
    }

    /**
     * @returns {number}
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
     * @param {number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.setAttr(RowIndex, rowIndex)
    }

    /**
     * @returns {number}
     */
    get rowIndex() {
        const index = this.getAttr(RowIndex)
        return index === null? this.row.rowIndex : index
    }

    /**
     * @param {number} rowSpan
     */
    set rowSpan(rowSpan) {
        if(rowSpan > 1) {
            this.ownerElement.rowSpan = rowSpan
        }
        else this.removeAttr('rowspan')
    }

    /**
     * @returns {number}
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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Td
    }
}

/**
 * @param {{}} init
 * @returns {Cell}
 */
export function cell(init) {
    return new Cell(init)
}
