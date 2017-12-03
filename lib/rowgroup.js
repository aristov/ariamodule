import { TBody } from 'htmlmodule'
import { Cell } from './cell'
import { Grid } from './grid'
import { GridCell } from './gridcell'
import { Row } from './row'
import { Structure } from './structure'
import { Table } from './table'

const { map } = Array.prototype

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
     * @returns {(Cell)[]}
     */
    get cells() {
        return this.findAll(Cell)
    }

    /**
     * @returns {(GridCell)[]}
     */
    get gridCells() {
        return this.findAll(GridCell)
    }

    /**
     * @returns {(Row)[]}
     */
    get rows() {
        const nodes = this.ownerElement.node.rows
        const handler = node => this.getInstance(node.attributes.role)
        return map.call(nodes, handler)
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
 * @param {*} init
 * @returns {RowGroup}
 */
export function rowGroup(...init) {
    return new RowGroup(...init)
}
