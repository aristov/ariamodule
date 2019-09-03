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
     * Reset grid tabIndex
     */
    resetTabIndex() {
        const cells = this.gridCells.filter(({ disabled }) => !disabled)
        if(!cells.some(({ tabIndex }) => tabIndex === 0)) {
            const first = cells[0]
            if(first) {
                first.tabIndex = 0
            }
        }
    }

    /**
     * Update selection according to the focused and active descendant cell
     */
    updateSelection(targetCell) {
        const focusedCell = this.focusedCell
        if(focusedCell && focusedCell.selected) {
            const rowIndex1 = focusedCell.rowIndex
            const rowIndex2 = targetCell.rowIndex
            const colIndex1 = focusedCell.colIndex
            const colIndex2 = targetCell.colIndex
            const rowIndexMin = Math.min(rowIndex1, rowIndex2)
            const rowIndexMax = Math.max(rowIndex1, rowIndex2)
            const colIndexMin = Math.min(colIndex1, colIndex2)
            const colIndexMax = Math.max(colIndex1, colIndex2)
            const cells = []
            for(const cell of this.gridCells) {
                const { rowIndex, colIndex } = cell
                if(rowIndex >= rowIndexMin && rowIndex <= rowIndexMax) {
                    if(colIndex >= colIndexMin && colIndex <= colIndexMax) {
                        if(cell.disabled) return
                        cells.push(cell)
                    }
                }
            }
            this.gridCells.forEach(cell => cell.selected = cells.includes(cell))
            this.activeDescendant = targetCell
        }
    }

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
     * @param {*} children
     */
    set children(children) {
        super.children = children
        this.resetTabIndex()
    }

    /**
     * @returns {ElementAssembler[]|*}
     */
    get children() {
        return super.children
    }

    /**
     * @returns {GridCell}
     */
    get focusedCell() {
        const { activeElement } = this.ownerDocument
        return this.find(GridCell, ({ ownerElement }) => ownerElement === activeElement)
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
