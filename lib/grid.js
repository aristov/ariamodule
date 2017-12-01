/**
 * Table
 * Grid
 * MergeGrid
 *
 * GridCell
 * MergeCell
 *
 * GridCellInput
 */

import { Table } from './table'
import { GridCell } from './gridcell'

function filterSelected({ selected }) {
    return selected === 'true'
}

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
        this.body.gridCells.forEach(cell => cell.clear())
        this.resetTabIndex()
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
        this.dropEffect = null
    }

    dropCellToSelectedArea() {
        const focusedCell = this.focusedCell
        const selectedCells = this.selectedCells
        const dropTargets = selectedCells.filter(({ dropEffect }) => dropEffect)
        const dropTarget = dropTargets[0]
        if(dropTarget) {
            if(dropTarget.dropEffect === 'move' && selectedCells.length) {
                focusedCell.replaceWith(selectedCells[0])
                focusedCell.emit('change', { bubbles : true })
            }
            else {
                dropTarget.dropEffect = null
                this.collapseSelection()
            }
        }
        focusedCell.grabbed = 'false'
    }

    /**
     * Merge specified cells
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
        return this.gridCells.filter(filterSelected)
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        if(readOnly) this.node.setAttribute('aria-readonly', 'true')
        else this.node.removeAttribute('aria-readonly')
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.node.getAttribute('aria-readonly') === 'true'
    }

    /**
     * @param {GridCell} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        if(activeDescendant) {
            this.node.setAttribute('aria-activedescendant', activeDescendant.id)
            this.updateSelection()
        }
        else this.node.removeAttribute('aria-activedescendant')
    }

    /**
     * @returns {GridCell}
     */
    get activeDescendant() {
        const id = this.node.getAttribute('aria-activedescendant')
        const node = id && document.getElementById(id)
        return this.getInstance(node)
    }

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
     * @param {Boolean} multiselectable
     */
    set multiselectable(multiselectable) {
        this.node.setAttribute('aria-multiselectable', String(multiselectable))
    }

    /**
     * @returns {Boolean}
     */
    get multiselectable() {
        return this.node.getAttribute('aria-multiselectable') === 'true'
    }

    /**
     * @param {Number} level
     */
    set level(level) {
        this.node.setAttribute('aria-level', String(level))
    }

    /**
     * @returns {Number}
     */
    get level() {
        return Number(this.node.getAttribute('aria-level'))
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

    resetTabIndex() {
        const body = this.body
        if(body) {
            const cells = body.gridCells
            if(!cells.some(({ tabIndex }) => tabIndex === 0)) {
                const first = cells[0]
                if(first) first.tabIndex = 0
            }
        }
    }

    /**
     * @param {*} children
     */
    set children(children) {
        super.children = children
        this.resetTabIndex()
    }

    get children() {
        return super.children
    }
}

/**
 * @param {*} init
 * @returns {Grid}
 */
export function grid(...init) {
    return new Grid(...init)
}
