import { Table } from './table'
import { GridCell } from './gridcell'
import { ActiveDescendant, Level, Multiselectable, ReadOnly } from './aria'

export class Grid extends Table {
    /**
     * @param {*} init
     */
    init(init) {
        this.on('mouseup', this.onMouseUp.bind(this))
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
            if(cell !== focusedCell) cell.selected = 'false'
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
        focusedCell.grabbed = 'false'
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
                if(cell.owns.length) cell.owns = []
            })
            first.owns = owns
            first.focus()
            first.emit('change', { bubbles : true })
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        const focusedCell = this.focusedCell
        if(focusedCell) {
            if(focusedCell.grabbed === 'true') {
                this.dropCellToSelectedArea()
            }
            else if(!focusedCell.grabbed) {
                focusedCell.grabbed = 'false'
            }
        }
        if(this.dropEffect.length) {
            this.dropEffect = null
        }
    }

    /**
     * Reset grid tabIndex
     */
    resetTabIndex() {
        const cells = this.gridCells
        if(!cells.some(({ tabIndex }) => tabIndex === 0)) {
            const first = cells[0]
            if(first) first.tabIndex = 0
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
            if(row.multiselectable) {
                cells = row.cells
                cells.forEach(cell => cell.selected = 'false')
                index1 = focusedCell.elementIndex
                index2 = activeDescendant.elementIndex
            }
            else if(this.multiselectable) {
                cells = focusedCell.column
                cells.forEach(cell => cell.selected = 'false')
                index1 = focusedCell.row.elementIndex
                index2 = activeDescendant.row.elementIndex
            }
            if(cells) {
                const selection = cells.slice(
                    Math.min(index1, index2),
                    Math.max(index1, index2) + 1)
                selection.forEach(cell => cell.selected = 'true')
            }
        }
    }

    /**
     * @param {GridCell} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(ActiveDescendant, activeDescendant)
        this.updateSelection()
    }

    /**
     * @returns {GridCell}
     */
    get activeDescendant() {
        return this.getAttribute(ActiveDescendant)
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = children
        this.resetTabIndex()
    }

    /**
     * @returns {Array}
     */
    get children() {
        return super.children
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
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(Level, level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(Level)
    }

    /**
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.setAttribute(Multiselectable, multiselectable)
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.getAttribute(Multiselectable)
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * Select or deselect all grid cells
     * @param {String} selected
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
        return this.gridCells.filter(({ selected }) => selected === 'true')
    }
}

/**
 * @param {*} init
 * @returns {Grid}
 */
export function grid(...init) {
    return new Grid(...init)
}
