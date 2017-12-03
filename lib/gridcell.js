import { Span } from 'htmlmodule'
import { Cell } from './cell'
import { ColumnHeader } from './columnheader'
import { Grid } from './grid'
import { ReadOnly, Required, Selected } from './aria'

const TABINDEX_INITIAL_VALUE = -1

export class GridCell extends Cell {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = TABINDEX_INITIAL_VALUE
        this.children = new Span({ className : 'text' })
        this.on('focus', this.onFocus.bind(this))
        this.on('blur', this.onBlur.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousemove', this.onMouseMove.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        super.init(init)
    }

    dragSelectedArea() {
        const { focusedCell, cells } = this.grid
        const tail = focusedCell.rowSpan
        cells.forEach(cell => {
            cell.selected = String(cell === this)
            if(cell.dropEffect.length) cell.dropEffect = null
        })
        if(tail) {
            const column = this.column
            const isSameColumn = this.elementIndex === focusedCell.elementIndex
            const threshold = focusedCell.rowIndex + tail
            let start = this.rowIndex
            let end = start + tail
            if(isSameColumn && end < threshold) void 0
            else if(start >= column.length / 2 || (isSameColumn && start >= threshold)) {
                start -= tail - 1
                end -= tail - 1
            }
            const collection = column.slice(start, end)
            const notAllowed = collection.some(({ owner }) => {
                if(owner === focusedCell) return false
                return Boolean(owner.value) || owner.rowSpan > 1
            })
            if(notAllowed) this.dropEffect = 'none'
            else {
                collection.forEach(cell => cell.selected = 'true')
                this.dropEffect = 'move'
            }
        }
    }

    focus() {
        this.owner.ownerElement.focus()
    }

    getSiblingByKeyEvent({ key, metaKey, ctrlKey }) {
        // debugger
        const cells = this.row.findAll(GridCell)
        const column = this.column.filter(cell => cell instanceof GridCell)
        const extraKey = metaKey || ctrlKey
        switch(key) {
            case 'ArrowLeft' :
                return extraKey? cells[0] : this.prev
            case 'ArrowRight' :
                return extraKey? cells[cells.length - 1] : this.next
            case 'ArrowUp' :
                return extraKey? column[0] : this.above
            case 'ArrowDown' :
                return extraKey? column[column.length - 1] : this.below
        }
        return null
    }

    moveUp() {
        const cell = this.above
        if(cell && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    moveRight() {
        let stop = false
        if(this.rowSpan > 1) {
            stop = this.owns.some(cell => {
                const { value, rowSpan } = cell.next
                return Boolean(value) || rowSpan > 1
            })
        }
        const cell = this.next
        if(!stop && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    moveDown() {
        const cell = this.below
        if(cell && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(this.owns[0] || cell)
            return true
        }
        return false
    }

    moveLeft() {
        let stop = false
        if(this.rowSpan > 1) {
            stop = this.owns.some(cell => {
                const { value, rowSpan } = cell.prev
                return Boolean(value) || rowSpan > 1
            })
        }
        const cell = this.prev
        if(!stop && !cell.value && cell.rowSpan === 1) {
            this.replaceWith(cell)
            return true
        }
        return false
    }

    onBlur() {
        this.classList.remove('focus')
        if(this.grabbed) this.grabbed = null
    }

    onFocus() {
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

    onMouseDown(event) {
        if(this.focused && this.grabbed && this.value) {
            this.grabbed = 'true'
        }
        else if(event.shiftKey) {
            const grid = this.grid
            if(grid.focusedCell) {
                event.preventDefault()
                grid.activeDescendant = this
            }
        }
        else if(this.grabbed) {
            this.grabbed = null
        }
    }

    onMouseMove({ buttons }) {
        if(buttons === 1) {
            const grid = this.grid
            const focusedCell = grid.focusedCell
            if(focusedCell && focusedCell !== this && focusedCell.grabbed === 'true') {
                if(focusedCell.grabbed === 'true' && !focusedCell.readOnly) {
                    this.dragSelectedArea()
                }
            }
            else if(this.row.multiselectable || grid.multiselectable) {
                grid.activeDescendant = this
            }
        }
    }

    onKeyDown(event) {
        const key = event.key
        this.grabbed = String(event.altKey)
        switch(key) {
            case 'Escape': this.onEscapeKeyDown(event); break
            default:
                if(key.startsWith('Arrow')) this.onArrowKeyDown(event)
        }
    }

    onKeyUp(event) {
        if(event.key === 'Alt') this.grabbed = 'false'
    }

    onSelectAllKeyDown(event) {
        event.preventDefault()
        this.selectAll()
    }

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

    selectAll() {
        if(this.row.multiselectable) this.row.selected = 'true'
        else if(this.grid.multiselectable) {
            this.column.forEach(cell => cell.selected = 'true')
        }
    }

    onEscapeKeyDown() {
        if(this.selected === 'true') {
            this.grid.selected = 'false'
            this.selected = 'true'
        }
    }

    replaceWith(cell) {
        const rowSpan = this.rowSpan
        if(rowSpan > 1) this.rowSpan = 1
        const rows = this.body.rows
        const index1 = this.rowIndex
        const index2 = cell.rowIndex
        const row1 = rows[index1].ownerElement.node
        const row2 = rows[index2].ownerElement.node
        const ref1 = this.ownerElement.node.nextSibling
        const ref2 = cell.ownerElement.node.nextSibling
        row1.insertBefore(cell.ownerElement.node, ref1)
        row2.insertBefore(this.ownerElement.node, ref2)
        if(rowSpan > 1) this.rowSpan = rowSpan
        this.focus()
    }

    get above() {
        let sibling = this.column[this.rowIndex - 1]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get below() {
        const sibling = this.column[this.rowIndex + this.rowSpan]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    set colSpan(colSpan) {
        const index = this.elementIndex
        this.owns = this.row.cells.slice(index + 1, index + colSpan)
    }

    get colSpan() {
        return super.colSpan
    }

    get column() {
        const body = this.body
        const handler = row => row.cells[this.elementIndex]
        return body? body.rows.map(handler) : null
    }

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

    set disabled(disabled) {
        this.tabIndex = NaN
        super.disabled = disabled
    }

    get disabled() {
        const row = this.row
        return row && row.disabled || super.disabled
    }

    set dropEffect(dropEffect) {
        this.grid.dropEffect = dropEffect
        super.dropEffect = dropEffect
    }

    get dropEffect() {
        return super.dropEffect
    }

    get focused() {
        return this.classList.contains('focus')
    }

    set grabbed(grabbed) {
        super.grabbed = grabbed
        const grid = this.grid
        if(grid) {
            grid.classList.toggle('grabbed', !this.readOnly && grabbed === 'true')
        }
    }

    get grabbed() {
        return super.grabbed
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.closest(Grid)
    }

    set hidden(hidden) {
        if(hidden) this.selected = 'false'
        super.hidden = hidden
    }

    get hidden() {
        return super.hidden
    }

    get next() {
        const sibling = this.row.cells[this.elementIndex + this.colSpan]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    set owner(owner) {
        this.hidden = true
        if(this.tabIndex === 0) {
            owner.tabIndex = 0
            this.tabIndex = -1
        }
    }

    get owner() {
        if(this.hidden) {
            const selector = `[aria-owns~=${ this.id }]`
            return this.grid.find(GridCell, selector) || this
        }
        else return this
    }

    set owns(owns) {
        this.owns.forEach(cell => {
            // fixme
            if(cell) cell.hidden = false
        })
        super.colSpan = 1
        super.rowSpan = 1
        if(owns.length) {
            const last = owns[owns.length - 1]
            owns.forEach(cell => cell.owner = this)
            super.colSpan = last.elementIndex - this.elementIndex + 1
            super.rowSpan = last.rowIndex - this.rowIndex + 1
        }
        super.owns = owns
    }

    get owns() {
        return super.owns
    }

    get prev() {
        const sibling = this.row.cells[this.elementIndex - 1]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    get readOnly() {
        const grid = this.grid
        return grid && grid.readOnly || this.getAttribute(ReadOnly)
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

    get rowHeader() {
        return this.row.header
    }

    set rowSpan(rowSpan) {
        const index = this.rowIndex
        this.owns = this.column.slice(index + 1, index + rowSpan)
    }

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
     *
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(Selected)
    }

    get text() {
        return this.find(Span)
    }

    set value(value) {
        if(value) this.dataset.value = value
        else this.removeAttribute('data-value')
        this.text.node.innerHTML = value.replace(/\n/g, '<br>')
        this.tabIndex = value? 0 : -1
    }

    get value() {
        return this.dataset.value || ''
    }
}

/**
 * @param {*} init
 * @returns {GridCell}
 */
export function gridCell(...init) {
    return new GridCell(...init)
}
