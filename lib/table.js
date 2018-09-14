import { Table as HTMLTable } from 'htmlmodule/lib/Table'
import { Section } from './section'
import { Cell } from './cell'
import { ColCount } from './aria/colcount'
import { RowCount } from './aria/rowcount'

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
     * @param {string} label
     */
    set label(label) {
        const caption = this.ownerElement.createCaption()
        caption.textContent = label
    }

    /**
     * @returns {string}
     */
    get label() {
        const caption = this.ownerElement.caption
        return caption? caption.textContent : ''
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
        const nodes = this.ownerElement.node.rows
        return map.call(nodes, node => this.getRoleOf(node))
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
        return HTMLTable
    }
}

/**
 * @param {{}} init
 * @returns {Table}
 */
export function table(init) {
    return new Table(init)
}
