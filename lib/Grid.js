import { Table } from './Table'
import { GridCell } from './GridCell'
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
     * @param {{}} init
     */
    init(init) {
        this.on('mousedown', this.onMouseDown)
        this.onMouseUp = this.onMouseUp.bind(this)
        super.init(init)
    }

    /**
     * Clear all GridCells
     */
    clear() {
        this.gridCells.forEach(cell => cell.clear())
        this.resetTabIndex()
    }

    /**
     * Remove selected attribute from all cells except focused
     */
    collapseSelection() {
        const focusedCell = this.focusedCell
        this.selectedCells.forEach(cell => {
            if(cell !== focusedCell) {
                cell.selected = false
            }
        })
        this.activeDescendant = focusedCell
    }

    /**
     * Drop cell to the selected area
     */
    dropCellToSelectedArea() {
        const focusedCell = this.focusedCell
        const selectedCells = this.selectedCells
        const handler = ({ dropEffect }) => dropEffect.length
        const dropTargets = selectedCells.filter(handler)
        const dropTarget = dropTargets[0]
        if(dropTarget) {
            if(dropTarget.dropEffect.includes('move') && selectedCells.length) {
                focusedCell.replaceWith(selectedCells[0])
                focusedCell.emit('change', { bubbles : true })
            }
            else {
                if(dropTarget.dropEffect.length) {
                    dropTarget.dropEffect = null
                }
                this.collapseSelection()
            }
        }
        focusedCell.grabbed = false
    }

    /**
     * Merge cells
     * @param {[GridCell]} cells
     */
    mergeCells(cells) {
        const first = cells[0]
        const last = cells[cells.length - 1]
        const owns = cells.slice(1).concat(last.owns)
        const filtered = cells.filter(({ value }) => value)
        const readOnlyCells = cells.filter(({ readOnly }) => readOnly)
        if(readOnlyCells.length || filtered.length > 1) {
            this.collapseSelection()
        }
        else {
            cells.forEach(cell => {
                if(cell.owns.length) {
                    cell.owns = []
                }
            })
            first.owns = owns
            first.focus()
            first.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        this.ownerDocument.on('mouseup', this.onMouseUp)
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        const focusedCell = this.focusedCell
        const cells = this.gridCells
        if(focusedCell) {
            if(focusedCell.grabbed) {
                this.dropCellToSelectedArea()
            }
        }
        cells.forEach(cell => {
            cell.dropEffect = cell === focusedCell && cell.value? 'move' : null
        })
        this.ownerDocument.un('mouseup', this.onMouseUp)
    }

    /**
     * Reset grid tabIndex
     */
    resetTabIndex() {
        const cells = this.gridCells
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
    updateSelection() {
        const { focusedCell, activeDescendant } = this
        if(focusedCell && focusedCell.selected) {
            const row = focusedCell.row
            let cells, index1, index2
            if(row.multiSelectable) {
                cells = row.cells
                cells.forEach(cell => cell.selected = false)
                index1 = focusedCell.elementIndex
                index2 = activeDescendant.elementIndex
            }
            else if(this.multiSelectable) {
                cells = focusedCell.column
                cells.forEach(cell => cell.selected = false)
                index1 = row.rowIndex
                index2 = activeDescendant.rowIndex
            }
            if(cells) {
                const selection = cells.slice(
                    Math.min(index1, index2),
                    Math.max(index1, index2) + 1)
                selection.forEach(cell => cell.selected = true)
            }
        }
    }

    /**
     * @param {GridCell} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ActiveDescendant, activeDescendant)
        this.updateSelection()
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
     * @param {*} content
     */
    set content(content) {
        this.children = [this.children, content]
    }

    /**
     * @returns {GridCell}
     */
    get focusedCell() {
        return this.find(GridCell, '.focus')
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
     * Select or deselect all grid cells
     * @param {boolean|undefined} selected
     */
    set selected(selected) {
        this.rows.forEach(row => row.selected = selected)
        this.gridCells.forEach(cell => cell.selected = selected)
    }

    /**
     * Gell all selected cells
     * @returns {[GridCell]}
     */
    get selectedCells() {
        return this.gridCells.filter(({ selected }) => selected)
    }
}

/**
 * @param {{}} init
 * @returns {Grid}
 */
export function grid(init) {
    return new Grid(init)
}