import { Section } from './section'
import { Cell } from './cell'

const { map } = Array.prototype

const LOCAL_NAME = 'table'

export class Table extends Section {
    /**
     * @param {Number} colCount
     */
    set colCount(colCount) {
        this.node.setAttribute('aria-colcount', String(colCount))
    }

    /**
     * @returns {Number}
     */
    get colCount() {
        return Number(this.node.getAttribute('aria-colcount'))
    }

    /**
     * @param {Number} rowCount
     */
    set rowCount(rowCount) {
        this.node.setAttribute('aria-rowcount', String(rowCount))
    }

    /**
     * @returns {Number}
     */
    get rowCount() {
        return Number(this.node.getAttribute('aria-rowcount'))
    }

    /**
     * @returns {RowGroup|null}
     */
    get head() {
        return this.getInstance(this.node.tHead)
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
    get body() {
        return this.bodies[0] || null
    }

    /**
     * @returns {(RowGroup)[]}
     */
    get bodies() {
        return map.call(this.node.tBodies, node => this.getInstance(node))
    }

    /**
     * @returns {(Row)[]}
     */
    get rows() {
        return map.call(this.node.rows, node => this.getInstance(node))
    }

    /**
     * @returns {(Cell)[]}
     */
    get cells() {
        return this.findAll(Cell)
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
 * @returns {Table}
 */
export function table(...init) {
    return new Table(...init)
}
