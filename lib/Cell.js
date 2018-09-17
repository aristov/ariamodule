import { Role } from './Role'
import { Section } from './Section'
import { ColIndex } from './aria/ColIndex'
import { ColSpan } from './aria/ColSpan'
import { RowIndex } from './aria/RowIndex'
import { RowSpan } from './aria/RowSpan'

/**
 * @summary A cell in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#cell
 */
export class Cell extends Section {
    /**
     * @returns {RowGroup|null}
     */
    get rowGroup() {
        return this.closest(Role.RowGroup)
    }

    /**
     * @param {number} colIndex
     */
    set colIndex(colIndex) {
        this.setAttr(ColIndex, colIndex)
    }

    /**
     * @returns {number}
     */
    get colIndex() {
        const index = this.getAttr(ColIndex)
        if(index === null) {
            const cells = this.row.cells
            return cells.indexOf(this)
        }
        return index
    }

    /**
     * @param {number} colSpan
     */
    set colSpan(colSpan) {
        this.setAttr(ColSpan, colSpan)
    }

    /**
     * @returns {number}
     */
    get colSpan() {
        return this.getAttr(ColSpan)
    }

    /**
     * @returns {ColumnHeader|null}
     */
    get columnHeader() {
        const index = this.colIndex
        return this.table.find(Role.ColumnHeader, ({ colIndex }) => colIndex === index)
    }

    /**
     * @returns {Row|null}
     */
    get row() {
        return this.closest(Role.Row)
    }

    /**
     * @returns {RowHeader}
     */
    get rowHeader() {
        return this.row.rowHeader
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
        return index === null?
            this.row.rowIndex :
            index
    }

    /**
     * @param {number} rowSpan
     */
    set rowSpan(rowSpan) {
        this.setAttr(RowSpan, rowSpan)
    }

    /**
     * @returns {number}
     */
    get rowSpan() {
        return this.getAttr(RowSpan)
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(Role.Table)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {Cell}
 */
export function cell(init) {
    return new Cell(init)
}
