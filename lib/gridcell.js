import { Cell } from './cell'
import { Widget } from './widget'
import { NodeInit, span, input } from 'htmlmodule'

export class GridCell extends Cell {

    init(init) {
        super.init({
            role : 'gridcell',
            className : 'gridcell',
            tabIndex : -1,
            dataset : { mode : 'navigation' },
            onfocus : this.onFocus.bind(this),
            onkeydown : this.onKeyDown.bind(this),
            onmouseenter : this.onMouseEnter.bind(this),
            ondblclick : this.onDoubleClick.bind(this),
            children : '',
        })
        super.init(init)
    }

    onDoubleClick() {
        this.mode = 'edit'
    }

    onMouseEnter({ buttons }) {
        if(buttons === 1) {
            if(this.row.multiselectable || this.grid.multiselectable) {
                this.grid.activeDescendant = this
            }
        }
    }

    onFocus() {
        if(this.selected) {
            this.grid.selected = 'false'
            this.selected = 'true'
            this.grid.activeDescendant = this
        }
        this.grid.cells.forEach(c => c.tabIndex = -1)
        this.tabIndex = 0
    }

    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) this.onArrowKeyDown(event)
        else if(key === 'Enter') this.onEnterKeyDown(event)
        else if(key === 'Escape') this.onEscapeKeyDown(event)
        else if(/^a$/i.test(key)) {
            if(event.metaKey || event.ctrlKey) this.onSelectAllKeyDown(event)
        }
        else if(/^[a-zа-я0-9 ]$/i.test(key)) this.onCharacterKeyDown(event)
        else if(key === 'Backspace') this.onBackspaceKeyDown(event)
    }

    onSelectAllKeyDown(event) {
        event.preventDefault()
        if(this.row.multiselectable) {
            this.row.selected = 'true'
        } else if(this.grid.multiselectable) {
            this.column.forEach(c => c.selected = 'true')
        }
    }

    onCharacterKeyDown(event) {
        this.mode = 'edit'
    }

    onBackspaceKeyDown(event) {
        if(this.mode !== 'edit') {
            event.preventDefault()
            if(this.value) this.value = ''
            else if(this.owns.length) this.owns = []
        }
    }

    onArrowKeyDown(event) {
        if(event.target === this.node) {
            event.preventDefault()
            const grid = this.grid
            const cell = event.shiftKey? grid.activeDescendant : this
            if(cell) {
                const siblings = {
                    ArrowLeft : c => c.prev,
                    ArrowRight : c => c.next,
                    ArrowUp : c => c.topSibling,
                    ArrowDown : c => c.bottomSibling
                }
                const sibling = siblings[event.key](cell)
                if(sibling) {
                    if(event.shiftKey) grid.activeDescendant = sibling
                    else sibling.focus()
                }
            }
        }
    }

    onEnterKeyDown(event) {
        if(this.mode === 'edit') {
            this.mode = 'navigation'
            this.node.focus()
        }
        else if(this.selected === 'true') {
            const filter = ({ selected }) => selected === 'true'
            const cells = this.grid.cells.filter(filter)
            const first = cells[0]
            if(cells.length > 1) {
                if(cells.some(({ owns }) => owns.length)) {
                    cells.forEach(cell => {
                        if(cell.owns.length) cell.owns = []
                        cell.selected = 'false'
                    })
                }
                else if(!this.readOnly) {
                    first.owns = cells.slice(1)
                    first.focus()
                }
            }
            else this.mode = 'edit'
        }
    }

    onEscapeKeyDown(event) {
        this.mode = 'navigation'
    }

    onInputBlur(event) {
        this.mode = 'navigation'
    }

    focus() {
        this.node.focus()
    }

    set mode(mode) {
        if(!this.readOnly && mode !== this.mode) {
            if(mode === 'edit') {
                this.text.hidden = true
                this.input.hidden = false
                this.input.focus()
            } else if(mode === 'navigation') {
                this.value = this.input.value
                this.input.hidden = true
                this.text.hidden = false
                // this.focus()
            }
        }
        this.dataset = { mode }
    }

    get mode() {
        return this.dataset.mode
    }

    set readOnly(readOnly) {
        if(readOnly) this.node.setAttribute('aria-readonly', 'true')
        else this.node.removeAttribute('aria-readonly')
    }

    get readOnly() {
        return this.node.getAttribute('aria-readonly') === 'true'
    }

    set required(required) {
        if(required) this.node.setAttribute('aria-required', 'true')
        else this.node.removeAttribute('aria-required')
    }

    get required() {
        return this.node.getAttribute('aria-required')
    }

    set selected(selected) {
        this.node.setAttribute('aria-selected', selected)
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    get grid() {
        return this.node.closest('table').assembler
    }

    get row() {
        return this.node.parentNode.assembler
    }

    get index() {
        return this.node.cellIndex
    }

    get prev() {
        const sibling = this.row.cells[this.index - 1]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get next() {
        const sibling = this.row.cells[this.index + this.colSpan]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get topSibling() {
        let sibling = this.column[this.row.index - 1]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get bottomSibling() {
        const sibling = this.column[this.row.index + this.rowSpan]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get column() {
        return this.grid.rows.map(r => r.cells[this.index])
    }

    get owner() {
        if(this.hidden) {
            const selector = `td[aria-owns~=${ this.id }]`
            const node = this.grid.node.querySelector(selector)
            return node? node.assembler : this
        } else return this
    }

    set colSpan(colSpan) {
        this.node.colSpan = colSpan
    }

    get colSpan() {
        return this.node.colSpan
    }

    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan
    }

    get rowSpan() {
        return this.node.rowSpan
    }

    set owns(owns) {
        this.owns.forEach(cell => cell.hidden = false)
        this.colSpan = 1
        this.rowSpan = 1
        if(owns.length) {
            const last = owns[owns.length - 1]
            owns.forEach(cell => {
                cell.hidden = true
                if(cell.selected) cell.selected = 'false'
            })
            this.colSpan = last.index - this.index + 1
            this.rowSpan = last.row.index - this.row.index + 1
        }
        super.owns = owns
        this.grid.activeDescendant = this
    }

    get owns() {
        return super.owns
    }

    set input(input) {
        this.node.append(input)
    }

    get input() {
        let node = this.node.querySelector('input')
        if(!node) {
            this.input = node = input({
                value : this.value,
                onblur : this.onInputBlur.bind(this)
            })
        }
        return node
    }

    get text() {
        return this.node.querySelector('span.text')
    }

    set children(children) {
        super.children = span({ className : 'text', children })
    }

    set value(value) {
        this.dataset.value = this.text.textContent = value
        if(!value) this.node.removeAttribute('data-value')
    }

    get value() {
        return this.dataset.value
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Widget.prototype, 'tabIndex')
Object.defineProperty(GridCell.prototype, 'tabIndex', descriptor)

export function gridcell(init) {
    return new GridCell('td', init)
}
