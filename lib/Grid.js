import { GridCell } from './GridCell'
import { Role } from './Role'
import { Table } from './Table'
import { ActiveDescendant } from './aria/ActiveDescendant'
import { Level } from './aria/Level'
import { MultiSelectable } from './aria/MultiSelectable'
import { ReadOnly } from './aria/ReadOnly'

/**
 * @summary A composite widget containing a collection of one or more rows with one
 *  or more cells where some or all cells in the grid are focusable by using
 *  methods of two-dimensional navigation, such as directional arrow keys.
 * @see https://www.w3.org/TR/wai-aria-1.1/#grid
 */
export class Grid extends Table {
    /**
     * @param {GridCell} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ActiveDescendant, activeDescendant)
    }

    /**
     * @returns {GridCell}
     */
    get activeDescendant() {
        return this.getAttr(ActiveDescendant)
    }

    /**
     * @returns {(GridCell|*)[]}
     */
    get gridCells() {
        return this.findAll(GridCell)
    }

    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(Level)
    }

    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(MultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(MultiSelectable)
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
     * Gell all selected cells
     * @returns {[GridCell]}
     */
    get selectedCells() {
        return this.gridCells.filter(({ selected }) => selected)
    }
}

export const ARIAGrid = Role.Grid = Grid
