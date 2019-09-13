import { Cell } from './Cell'
import { Role } from './Role'
import { Row } from './Row'
import { RowGroup } from './RowGroup'
import { Section } from './Section'
import { ColCount } from './aria/ColCount'
import { RowCount } from './aria/RowCount'

const { map } = Array.prototype

/**
 * @summary A section containing data arranged in rows and columns.
 * @see https://www.w3.org/TR/wai-aria-1.1/#table
 */
export class Table extends Section {
    /**
     * @returns {RowGroup[]}
     */
    get rowGroups() {
        return this.findAll(RowGroup)
    }

    /**
     * @returns {Cell[]}
     */
    get cells() {
        return this.findAll(Cell)
    }

    /**
     * @param {number} colCount
     */
    set colCount(colCount) {
        this.setAttr(ColCount, colCount)
    }

    /**
     * @returns {number}
     */
    get colCount() {
        return this.getAttr(ColCount)
    }

    /**
     * @param {number} rowCount
     */
    set rowCount(rowCount) {
        this.setAttr(RowCount, rowCount)
    }

    /**
     * @returns {number}
     */
    get rowCount() {
        return this.getAttr(RowCount)
    }

    /**
     * @returns {Row[]}
     */
    get rows() {
        return this.findAll(Row)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { Table as ARIATable }

Role.Table = Table
