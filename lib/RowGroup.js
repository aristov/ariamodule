import { Cell } from './Cell'
import { Grid } from './Grid'
import { GridCell } from './GridCell'
import { Role } from './Role'
import { Row } from './Row'
import { Structure } from './Structure'
import { Table } from './Table'

/**
 * @summary A structure containing one or more row elements in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#rowgroup
 */
export class RowGroup extends Structure {
    /**
     * @returns {Table|*|null}
     */
    get table() {
        return this.closest(Role.Table)
    }

    /**
     * @returns {Grid|*|null}
     */
    get grid() {
        return this.closest(Role.Grid)
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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RowGroup as ARIARowGroup }

Role.RowGroup = RowGroup
