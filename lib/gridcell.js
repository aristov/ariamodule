import { Span } from 'htmlmodule/lib/span'
import { Cell } from './cell'
import { ColumnHeader } from './columnheader'
import { Grid } from './grid'
import { ReadOnly } from './aria/readonly'
import { Required } from './aria/required'
import { Selected } from './aria/selected'

const SELECT_ALL_KEY_RE = /^[aф]$/i
const TABINDEX_INITIAL_VALUE = -1

/**
 * @summary A cell in a grid or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#gridcell
 */
export class GridCell extends Cell {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.tabIndex = TABINDEX_INITIAL_VALUE
        this.children = new Span({ className : 'text' })
        this.on('focus', this.onFocus.bind(this))
        this.on('blur', this.onBlur.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousemove', this.onMouseMove.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
    }

    /**
     * Drag the selected area
     */
    dragSelectedArea() {
        const { focusedCell, cells } = this.grid
        const tail = focusedCell.rowSpan
        cells.forEach(cell => {
            cell.selected = String(cell === this)
            if(cell.dropEffect.length) cell.dropEffect = null
        })
        if(tail) {
            const column = this.column//.filter(cell => cell instanceof GridCell)
            const isSameColumn = this.elementIndex === focusedCell.elementIndex
            const threshold = focusedCell.rowIndex + tail
            let start = this.rowIndex
            let end = start + tail
            if(isSameColumn && end < threshold) void 0
            else if(start >= column.length / 2
                || (isSameColumn && start >= threshold)
                || end > column.length) {
                start -= tail - 1
                end -= tail - 1
            }
            const collection = column.slice(start, end)
            const notAllowed = start < 0 || collection.some(({ ownerCell }) => {
                if(ownerCell === focusedCell) return false
                return Boolean(ownerCell.value) || ownerCell.rowSpan > 1
            })
            if(notAllowed) this.dropEffect = 'none'
            else {
                collection.forEach(cell => cell.selected = 'true')
                this.dropEffect = 'move'
            }
        }
    }

    /**
     * Focus the cell or it's owner
     */
    focus() {
        this.ownerCell.ownerElement.focus()
        if(this === this.ownerCell && this.value) {
            this.dropEffect = 'move'
        }
    }

    /**
     * @param {String} key
     * @param {Boolean} metaKey
     * @param {Boolean} ctrlKey
     * @returns {GridCell|null}
     */
    getSiblingByKeyEvent({ key, metaKey, ctrlKey }) {
        const cells = this.row.findAll(GridCell)
        const column = this.column.filter(cell => cell instanceof GridCell)
        const extraKey = metaKey || ctrlKey
        switch(key) {
            case 'ArrowLeft' :
                return extraKey? cells[0] : this.prevCell
            case 'ArrowRight' :
                return extraKey? cells[cells.length - 1] : this.nextCell
            case 'ArrowUp' :
                return extraKey? column[0] : this.aboveCell
            case 'ArrowDown' :
                return extraKey? column[column.length - 1] : this.belowCell
        }
        return null
    }

    /**
     * @returns {Boolean}
     */
    moveUp() {
        const cell = this.aboveCell
        if(cell && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    /**
     * @returns {Boolean}
     */
    moveRight() {
        let stop = false
        if(this.rowSpan > 1) {
            stop = this.owns.some(cell => {
                const { value, rowSpan } = cell.nextCell
                return Boolean(value) || rowSpan > 1
            })
        }
        const cell = this.nextCell
        if(!stop && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    /**
     * @returns {Boolean}
     */
    moveDown() {
        const cell = this.belowCell
        if(cell && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(this.owns[0] || cell)
            return true
        }
        return false
    }

    /**
     * @returns {Boolean}
     */
    moveLeft() {
        let stop = false
        if(this.rowSpan > 1) {
            stop = this.owns.some(cell => {
                const { value, rowSpan } = cell.prevCell
                return Boolean(value) || rowSpan > 1
            })
        }
        const cell = this.prevCell
        if(!stop && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    /**
     * @param {FocusEvent} event
     */
    onBlur(event) {
        this.classList.remove('focus')
        if(this.dropEffect.length) {
            this.dropEffect = null
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const grid = this.grid
        if(this.selected) {
            grid.selected = 'false'
            this.selected = 'true'
            grid.activeDescendant = this
        }
        grid.gridCells.forEach(cell => cell.tabIndex = cell.value? 0 : -1)
        this.tabIndex = 0
        // this.grabbed = 'false'
        this.classList.add('focus')
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if(event.shiftKey) {
            const grid = this.grid
            if(grid.focusedCell) {
                event.preventDefault()
                grid.activeDescendant = this
            }
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        const buttons = event.buttons
        if(buttons === 1) {
            if(this.focused && this.grabbed && this.value) {
                this.grabbed = 'true'
            }
            else {
                const grid = this.grid
                const focusedCell = grid.focusedCell
                if(focusedCell && focusedCell.grabbed === 'true') {
                    if(focusedCell.grabbed === 'true' && !focusedCell.readOnly) {
                        this.dragSelectedArea()
                    }
                }
                else if(this.row.multiselectable || grid.multiselectable) {
                    grid.activeDescendant = this
                }
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'Alt' && this.grabbed && this.value) {
            this.grabbed = 'true'
        }
        else if(key === 'Enter') {
            this.onEnterKeyDown(event)
        }
        else if(key === 'Escape') {
            this.onEscapeKeyDown(event)
        }
        else if(key === 'Backspace') {
            this.onBackspaceKeyDown(event)
        }
        else if(key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        else if(SELECT_ALL_KEY_RE.test(key) && (event.metaKey || event.ctrlKey)) {
            this.onSelectAllKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onBackspaceKeyDown(event) {
        event.preventDefault()
        if(!this.readOnly) {
            const grid = this.grid
            const selectedCells = grid.selectedCells
            if(selectedCells.length > 1) {
                grid.collapseSelection()
            }
            else if(this.rowSpan > 1) {
                this.rowSpan--
                this.emit('change', { bubbles : true })
                grid.activeDescendant = this
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        const grid = this.grid
        const selectedCells = grid.selectedCells
        if(this.selected === 'true'
            && grid.multiselectable
            && selectedCells.length > 1) {
            if(selectedCells.some(cell => {
                return cell.value || cell.rowSpan > 1
            })) {
                this.grid.collapseSelection()
            }
            this.grid.mergeCells(selectedCells)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        if(event.key === 'Alt' && this.grabbed && this.value) {
            this.grabbed = 'false'
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSelectAllKeyDown(event) {
        event.preventDefault()
        this.selectAll()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        if(event.target === this.ownerElement.node) {
            event.preventDefault()
            const grid = this.grid
            const cell = event.shiftKey? grid.activeDescendant : this
            const { key, shiftKey } = event
            if(cell) {
                const sibling = cell.getSiblingByKeyEvent(event)
                if(sibling) {
                    if(this.grabbed === 'true' && !this.readOnly) {
                        let change = false
                        if(key === 'ArrowLeft') change = this.moveLeft()
                        if(key === 'ArrowUp') change = this.moveUp()
                        if(key === 'ArrowRight') change = this.moveRight()
                        if(key === 'ArrowDown') change = this.moveDown()
                        if(change) this.emit('change', { bubbles : true })
                    }
                    else if(shiftKey) grid.activeDescendant = sibling
                    else if(this.grabbed === 'true' && this.readOnly) void 0
                    else sibling.focus()
                }
            }
        }
    }

    /**
     * Select all grid cells
     */
    selectAll() {
        if(this.row.multiselectable) this.row.selected = 'true'
        else if(this.grid.multiselectable) {
            this.column.forEach(cell => cell.selected = 'true')
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.selected === 'true') {
            this.grid.selected = 'false'
            this.selected = 'true'
        }
    }

    /**
     * @param {GridCell} cell
     */
    replaceWith(cell) {
        const rowSpan = this.rowSpan
        if(rowSpan > 1) this.rowSpan = 1
        const rows = this.body.rows
        const index1 = this.rowIndex
        const index2 = cell.rowIndex
        const row1 = rows[index1].ownerElement
        const row2 = rows[index2].ownerElement
        const ref1 = this.ownerElement.nextSibling
        const ref2 = cell.ownerElement.nextSibling
        row1.insertBefore(cell.ownerElement, ref1)
        row2.insertBefore(this.ownerElement, ref2)
        if(rowSpan > 1) this.rowSpan = rowSpan
        this.focus()
    }

    /**
     * @returns {GridCell}
     */
    get aboveCell() {
        let sibling = this.column[this.rowIndex - 1]
        return sibling && !sibling.disabled? sibling.ownerCell : null
    }

    /**
     * @returns {GridCell}
     */
    get belowCell() {
        const sibling = this.column[this.rowIndex + this.rowSpan]
        return sibling && !sibling.disabled? sibling.ownerCell : null
    }

    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        const index = this.elementIndex
        this.owns = this.row.cells.slice(index + 1, index + colSpan)
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return super.colSpan
    }

    /**
     * @returns {GridCell[]}
     */
    get column() {
        const body = this.body
        const handler = row => row.cells[this.elementIndex]
        return body? body.rows.map(handler) : null
    }

    /**
     * @returns {ColumnHeader|null}
     */
    get columnHeader() {
        const head = this.grid.head
        if(head) {
            const row = head.rows[0]
            if(row) {
                const cell = row.cells[this.elementIndex]
                if(cell instanceof ColumnHeader) return cell
            }
        }
        return null
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.tabIndex = NaN
        super.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        const row = this.row
        return Boolean(row) && row.disabled || super.disabled
    }
    
    /**
     * @returns {Boolean}
     */
    get focused() {
        return this.classList.contains('focus')
    }

    /**
     * @param {String} grabbed
     */
    set grabbed(grabbed) {
        const grid = this.grid
        if(grid && !this.readOnly) {
            grid.classList.toggle('grabbed', grabbed === 'true')
        }
        super.grabbed = grabbed
    }

    /**
     * @returns {String}
     */
    get grabbed() {
        return super.grabbed
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.closest(Grid)
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        if(hidden) {
            if(this.selected) {
                this.selected = 'false'
            }
            this.value = ''
        }
        super.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return super.hidden
    }

    /**
     * @returns {GridCell}
     */
    get nextCell() {
        const sibling = this.row.cells[this.elementIndex + this.colSpan]
        return sibling && !sibling.disabled? sibling.ownerCell : null
    }

    /**
     * @param {GridCell} ownerCell
     */
    set ownerCell(ownerCell) {
        const value = this.value
        if(value) {
            ownerCell.value = [
                ownerCell.value,
                value
            ].filter(v => v.trim()).join(', ')
        }
        this.hidden = true
        if(this.tabIndex === 0) {
            this.tabIndex = -1
            ownerCell.tabIndex = 0
        }
    }

    /**
     * @returns {GridCell}
     */
    get ownerCell() {
        if(this.hidden) {
            const selector = `[aria-owns~=${ this.id }]`
            return this.grid.find(GridCell, selector) || this
        }
        else return this
    }

    /**
     * @param {GridCell[]} owns
     */
    set owns(owns) {
        this.owns.forEach(cell => {
            // fixme
            if(cell) cell.hidden = false
        })
        super.colSpan = 1
        super.rowSpan = 1
        if(owns.length) {
            const last = owns[owns.length - 1]
            owns.forEach(cell => cell.ownerCell = this)
            super.colSpan = last.elementIndex - this.elementIndex + 1
            super.rowSpan = last.rowIndex - this.rowIndex + 1
        }
        super.owns = owns
    }

    /**
     * @returns {GridCell[]}
     */
    get owns() {
        return super.owns
    }

    /**
     * @returns {GridCell}
     */
    get prevCell() {
        const sibling = this.row.cells[this.elementIndex - 1]
        return sibling && !sibling.disabled? sibling.ownerCell : null
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
        const grid = this.grid
        return Boolean(grid) && grid.readOnly || this.getAttribute(ReadOnly)
    }

    /**
     *
     * @param {Boolean} required
     */
    set required(required) {
        this.setAttribute(Required, required)
    }

    /**
     *
     * @returns {Boolean}
     */
    get required() {
        return this.getAttribute(Required)
    }

    /**
     * @returns {RowHeader}
     */
    get rowHeader() {
        return this.row.header
    }

    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        const index = this.rowIndex
        this.owns = this.column.slice(index + 1, index + rowSpan)
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return super.rowSpan
    }

    /**
     *
     * @param {String} selected
     */
    set selected(selected) {
        this.setAttribute(Selected, selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(Selected)
    }

    /**
     * @returns {Span|null}
     */
    get textElement() {
        return this.find(Span, '.text')
    }

    /**
     * @param {String} value
     */
    set value(value) {
        if(value) this.dataset.value = value
        else this.removeAttribute('data-value')
        this.textElement.innerHTML = value.replace(/\n/g, '<br>')
        this.dropEffect = value? 'move' : null
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.dataset.value || this.textContent
    }
}

/**
 * @param {*} [init]
 * @returns {GridCell}
 */
export function gridCell(init) {
    return new GridCell(init)
}
