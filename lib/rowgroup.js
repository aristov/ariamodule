import { TBody } from 'htmlmodule/lib/tbody'
import { Cell } from './cell'
import { Grid } from './grid'
import { GridCell } from './gridcell'
import { Row } from './row'
import { Structure } from './structure'
import { Table } from './table'

/**
 * @summary A structure containing one or more row elements in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#rowgroup
 */
export class RowGroup extends Structure {
    /**
     * @returns {Table|*|null}
     */
    get table() {
        return this.closest(Table)
    }

    /**
     * @returns {Grid|*|null}
     */
    get grid() {
        return this.closest(Grid)
    }

    /**
     * @returns {Cell[]}
     */
    get cells() {
        return this.findAll(Cell)
    }

    /**
     * @returns {GridCell[]}
     */
    get gridCells() {
        return this.findAll(GridCell)
    }

    /**
     * @returns {Row[]}
     */
    get rows() {
        return this.findAll(Row)
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
        return TBody
    }
}

/**
 * @param {*} [init]
 * @returns {RowGroup}
 */
export function rowGroup(init) {
    return new RowGroup(init)
}
