import { Cell } from './Cell'
import { GridCell } from './GridCell'
import { Group } from './Group'
import { Role } from './Role'
import { RowHeader } from './RowHeader'
import { Table } from './Table'
import { ColIndex } from './aria/ColIndex'
import { Level } from './aria/Level'
import { MultiSelectable } from './aria/MultiSelectable'
import { RowIndex } from './aria/RowIndex'
import { Selected } from './aria/Selected'

/**
 * @summary A row of cells in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#row
 */
export class Row extends Group {
    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const parent = this.rowGroup || this.table
        for(const row of parent.rows) {
            row.tabIndex = row === this? 0 : -1
            if(row.selected !== undefined) {
                row.selected = row === this
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.target === this.node) {
            switch(event.key) {
                case ' ': this.onSpaceKeyDown(event); break
                case 'Enter': this.onEnterKeyDown(event); break
                case 'ArrowUp': this.onArrowUpKeyDown(event); break
                case 'ArrowDown': this.onArrowDownKeyDown(event); break
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        event.preventDefault()
        const handler = event => {
            this.classList.remove('active')
            this.click()
            this.un('keyup', handler)
        }
        this.classList.add('active')
        this.on('keyup', handler)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        this.click()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowUpKeyDown(event) {
        event.preventDefault()
        const parent = this.rowGroup || this.table
        const rows = parent.rows.filter(({ node, disabled }) => {
            return !disabled && getComputedStyle(node).display !== 'none'
        })
        const row = rows[rows.indexOf(this) - 1]
        row && row.focus()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        event.preventDefault()
        const parent = this.rowGroup || this.table
        const rows = parent.rows.filter(({ node, disabled }) => {
            return !disabled && getComputedStyle(node).display !== 'none'
        })
        const row = rows[rows.indexOf(this) + 1]
        row && row.focus()
    }

    /**
     * @returns {Cell[]}
     */
    get cells() {
        return this.findAll(Cell)
    }

    /**
     * @param {number} colIndex
     */
    set colIndex(colIndex) {
        this.setAttr(ColIndex, colIndex)
    }

    /**
     * @returns {number}
     */
    get colIndex() {
        return this.getAttr(ColIndex) || 0
    }

    /**
     * @returns {(GridCell)[]}
     */
    get gridCells() {
        return this.findAll(GridCell)
    }

    /**
     * @returns {RowHeader|null}
     */
    get rowHeader() {
        return this.find(RowHeader)
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
     * @returns {Row}
     */
    get nextRow() {
        const rows = (this.rowGroup || this.table).rows
        return rows[this.rowIndex + 1] || null
    }

    /**
     * @returns {Row}
     */
    get prevRow() {
        const rows = (this.rowGroup || this.table).rows
        return rows[this.rowIndex - 1] || null
    }

    /**
     * @returns {RowGroup}
     */
    get rowGroup() {
        return this.closest(Role.RowGroup)
    }

    /**
     * @param {number} rowIndex
     */
    set rowIndex(rowIndex) {
        this.setAttr(RowIndex, rowIndex)
    }

    /**
     * @returns {number}
     */
    get rowIndex() {
        const index = this.getAttr(RowIndex)
        if(index === null) {
            const rows = (this.rowGroup || this.table).rows
            return rows.indexOf(this)
        }
        return index
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

    /**
     * @param {number|null} tabIndex
     */
    set tabIndex(tabIndex) {
        if(tabIndex !== null) {
            this.on('focus', this.onFocus)
            this.on('keydown', this.onKeyDown)
        }
        super.tabIndex = tabIndex
    }

    /**
     * @returns {number|null}
     */
    get tabIndex() {
        return super.tabIndex
    }

    /**
     * @returns {Table|null}
     */
    get table() {
        return this.closest(Role.Table)
    }
}

Role.Row = Row
