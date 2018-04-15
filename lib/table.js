import { Table as HTMLTable } from 'htmlmodule'
import { Section } from './section'
import { Cell } from './cell'
import { ColCount, RowCount } from './aria'

const { map } = Array.prototype

/**
 * @summary A section containing data arranged in rows and columns.
 * @see https://www.w3.org/TR/wai-aria-1.1/#table
 */
export class Table extends Section {
    /**
     * @returns {RowGroup[]}
     */
    get bodies() {
        const nodeList = this.ownerElement.node.tBodies
        return map.call(nodeList, node => this.getRoleOf(node))
    }

    /**
     * @returns {Cell[]}
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
     * @returns {RowGroup|null|*}
     */
    get foot() {
        return this.getRoleOf(this.ownerElement.tFoot)
    }

    /**
     * @returns {RowGroup|null}
     */
    get head() {
        return this.getRoleOf(this.ownerElement.tHead)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const caption = this.ownerElement.createCaption()
        caption.textContent = label
    }

    /**
     * @returns {String}
     */
    get label() {
        const caption = this.ownerElement.caption
        return caption? caption.textContent : ''
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
     * @returns {Row[]}
     */
    get rows() {
        const nodes = this.ownerElement.node.rows
        return map.call(nodes, node => this.getRoleOf(node))
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
 * @param {*} [init]
 * @returns {Table}
 */
export function table(...init) {
    return new Table(...init)
}
