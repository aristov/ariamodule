import { Cell } from './Cell'
import { Role } from './Role'
import { ReadOnly } from './aria/ReadOnly'
import { Required } from './aria/Required'
import { Selected } from './aria/Selected'

/**
 * @summary A cell in a grid or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#gridcell
 */
export class GridCell extends Cell {
    /**
     * @returns {GridCell[]}
     */
    get column() {
        const group = this.rowGroup || this.grid
        const index = this.colIndex
        return group.findAll(Cell, ({ colIndex }) => colIndex === index)
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.closest(Role.Grid)
    }
    
    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ReadOnly)
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(Required, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(Required)
    }

    /**
     * @param {boolean|undefined} selected
     */
    set selected(selected) {
        this.setAttr(Selected, selected)
    }

    /**
     * @returns {boolean|undefined}
     */
    get selected() {
        return this.getAttr(Selected)
    }
}

export const ARIAGridCell = Role.GridCell = GridCell
