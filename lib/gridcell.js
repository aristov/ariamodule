import { Grid } from './grid'
import { Cell } from './cell'
import { ColumnHeader } from './columnheader'
import { span } from 'htmlmodule'

const { assign } = Object

const TABINDEX_INITIAL_VALUE = -1
const CHARACTER_KEY_RE = /^[a-zа-я0-9!\/\$%\.\s]$/i
const SELECT_ALL_KEY_RE = /^[aф]$/i

export class GridCell extends Cell {
    init(init) {
        this.tabIndex = TABINDEX_INITIAL_VALUE
        this.children = span({ className : 'text' })
        this.on('focus', this.onFocus.bind(this))
        this.on('blur', this.onBlur.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mousemove', this.onMouseMove.bind(this))
        this.on('mousedown', this.onMouseDown.bind(this))
        super.init(init)
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

    dragSelectedArea() {
        const { focusedCell, cells } = this.grid
        const tail = focusedCell.rowSpan
        cells.forEach(cell => {
            cell.selected = String(cell === this)
            cell.dropEffect = null
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
        else this.grabbed = null
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

    moveUp() {
        const cell = this.above
        if(cell && !cell.value && cell.rowSpan === 1) {
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

    onBlur() {
        this.classList.remove('focus')
        this.grabbed = null
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

    selectAll() {
        if(this.row.multiselectable) this.row.selected = 'true'
        else if(this.grid.multiselectable) {
            this.column.forEach(cell => cell.selected = 'true')
        }
    }
    
    onArrowKeyDown(event) {
        if(event.target === this.node) {
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

    getSiblingByKeyEvent({ key, metaKey, ctrlKey }) {
        const cells = this.row.cells.filter(({ role }) => role === this.role)
        const column = this.column.filter(({ role }) => role === this.role)
        const extraKey = metaKey || ctrlKey
        switch(key) {
            case 'ArrowLeft' : return extraKey? cells[0] : this.prev
            case 'ArrowRight' : return extraKey? cells[cells.length - 1] : this.next
            case 'ArrowUp' : return extraKey? column[0] : this.above
            case 'ArrowDown' : return extraKey? column[column.length - 1] : this.below
        }
        return null
    }

    onEscapeKeyDown() {
        if(this.selected === 'true') {
            this.grid.selected = 'false'
            this.selected = 'true'
        }
    }

    focus() {
        this.owner.node.focus()
    }

    replaceWith(cell) {
        const rowSpan = this.rowSpan
        if(rowSpan > 1) this.rowSpan = 1
        const rows = this.body.rows
        const index1 = this.rowIndex
        const index2 = cell.rowIndex
        const row1 = rows[index1].node
        const row2 = rows[index2].node
        const ref1 = this.node.nextSibling
        const ref2 = cell.node.nextSibling
        row1.insertBefore(cell.node, ref1)
        row2.insertBefore(this.node, ref2)
        if(rowSpan > 1) this.rowSpan = rowSpan
        this.focus()
    }

    set dropEffect(dropEffect) {
        this.grid.dropEffect = dropEffect
        super.dropEffect = dropEffect
    }

    get dropEffect() {
        return super.dropEffect
    }

    set disabled(disabled) {
        this.tabIndex = NaN
        super.disabled = disabled
    }

    get disabled() {
        const row = this.row
        return row && row.disabled || super.disabled
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

    get focused() {
        return this.classList.contains('focus')
    }

    set owns(owns) {
        const node = this.node
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

    set hidden(hidden) {
        if(hidden) this.selected = 'false'
        super.hidden = hidden
    }

    get hidden() {
        return super.hidden
    }
    
    set readOnly(readOnly) {
        if(readOnly) this.node.setAttribute('aria-readonly', 'true')
        else this.node.removeAttribute('aria-readonly')
    }

    get readOnly() {
        const grid = this.grid
        return grid && grid.readOnly || this.node.getAttribute('aria-readonly') === 'true'
    }

    /**
     *
     * @param {Boolean} required
     */
    set required(required) {
        if(required) {
            this.node.setAttribute('aria-required', 'true')
        }
        else this.node.removeAttribute('aria-required')
    }

    /**
     *
     * @returns {Boolean}
     */
    get required() {
        return this.node.getAttribute('aria-required') === 'true'
    }

    /**
     *
     * @param {String} selected
     */
    set selected(selected) {
        this.node.setAttribute('aria-selected', selected)
    }

    /**
     *
     * @returns {String}
     */
    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    /**
     * @returns {Grid}
     */
    get grid() {
        return this.closest(Grid)
    }

    get prev() {
        const sibling = this.row.cells[this.elementIndex - 1]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get next() {
        const sibling = this.row.cells[this.elementIndex + this.colSpan]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get above() {
        let sibling = this.column[this.rowIndex - 1]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get below() {
        const sibling = this.column[this.rowIndex + this.rowSpan]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get column() {
        const body = this.body
        const handler = row => row.cells[this.elementIndex]
        return body? body.rows.map(handler) : null
    }

    set colSpan(colSpan) {
        const index = this.elementIndex
        this.owns = this.row.cells.slice(index + 1, index + colSpan)
    }

    get colSpan() {
        return super.colSpan
    }

    set rowSpan(rowSpan) {
        const index = this.rowIndex
        this.owns = this.column.slice(index + 1, index + rowSpan)
    }

    get rowSpan() {
        return super.rowSpan
    }

    get text() {
        return this.node.querySelector('span.text')
    }

    set value(value) {
        this.dataset.value = value
        this.text.innerHTML = value.replace(/\n/g, '<br>')
        if(!value) this.node.removeAttribute('data-value')
        this.tabIndex = value? 0 : -1
    }

    get value() {
        return this.dataset.value || ''
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

    get rowHeader() {
        return this.row.header
    }
}

/**
 * @param {*} init
 * @returns {GridCell}
 */
export function gridCell(...init) {
    return new GridCell(...init)
}
