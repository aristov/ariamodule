import { Table as HTMLTable } from 'htmlmodule'
import { Section } from './section'
import { Cell } from './cell'
import { ColCount, RowCount } from './aria'

const { map } = Array.prototype

export class Table extends Section {
    /**
     * @returns {(RowGroup)[]}
     */
    get bodies() {
        return map.call(this.node.tBodies, node => this.getInstance(node))
    }

    /**
     * @returns {RowGroup|null}
     */
    get body() {
        return this.bodies[0] || null
    }

    /**
     * @returns {(Cell)[]}
     */
    get cells() {
        return this.findAll(Cell)
    }

    /**
     * @param {Number} colCount
     */
    set colCount(colCount) {
        this.setAttribute(ColCount, colCount)
    }

    /**
     * @returns {Number}
     */
    get colCount() {
        return this.getAttribute(ColCount)
    }

    /**
     * @returns {RowGroup|null}
     */
    get foot() {
        return this.getInstance(this.node.tFoot)
    }

    /**
     * @returns {RowGroup|null}
     */
    get head() {
        return this.getInstance(this.node.tHead)
    }

    /**
     * @param {Number} rowCount
     */
    set rowCount(rowCount) {
        this.setAttribute(RowCount, rowCount)
    }

    /**
     * @returns {Number}
     */
    get rowCount() {
        return this.getAttribute(RowCount)
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
     * @returns {Function}
     */
    static get elementAssembler() {
        return HTMLTable
    }
}

/**
 * @param {*} init
 * @returns {Table}
 */
export function table(...init) {
    return new Table(...init)
}
