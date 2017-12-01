import { Structure } from './structure'
import { Cell } from './cell'
import { GridCell } from './gridcell'

const { map } = Array.prototype

const LOCAL_NAME = 'tbody'

export class RowGroup extends Structure {
    /**
     * @returns {Table}
     */
    get table() {
        return this.parentNode
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.parentNode
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
        return map.call(this.node.rows, node => this.getInstance(node))
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {RowGroup}
 */
export function rowGroup(...init) {
    return new RowGroup(...init)
}
