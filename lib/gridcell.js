import { Cell } from './cell'
import { span, input } from 'htmlmodule'

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
        switch(key) {
            case 'Enter': this.onEnterKeyDown(event); break
            case 'Escape': this.onEscapeKeyDown(event); break
            case 'Backspace': this.onBackspaceKeyDown(event); break
            default:
                if(key.startsWith('Arrow')) this.onArrowKeyDown(event)
                else if(/^[a-zа-я0-9 ]$/i.test(key)) this.onCharacterKeyDown(event)
        }
    }

    onSelectAllKeyDown(event) {
        event.preventDefault()
        if(this.row.multiselectable) this.row.selected = 'true'
        else if(this.grid.multiselectable) {
            this.column.forEach(c => c.selected = 'true')
        }
    }

    onCharacterKeyDown(event) {
        if(this.mode === 'navigation') {
            if(/^a$/i.test(event.key) && (event.metaKey || event.ctrlKey)) {
                this.onSelectAllKeyDown(event)
            }
            else this.mode = 'edit'
        }
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
                    else if(event.altKey) this.replaceWith(sibling)
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

    replaceWith(cell) {
        if(this.value && cell) {
            if(this.owns.length) this.owns = []
            if(cell.owns.length) cell.owns = []
            const rows = this.grid.rows
            const index1 = this.row.index
            const index2 = cell.row.index
            const row1 = rows[index1].node
            const row2 = rows[index2].node
            const ref1 = this.node.nextSibling
            const ref2 = cell.node.nextSibling
            row1.insertBefore(cell.node, ref1)
            row2.insertBefore(this.node, ref2)
            this.focus()
            this.emit('change')
            cell.emit('change')
        }
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
        }
        else return this
    }

    set colSpan(colSpan) {
        const index = this.index
        const owns = this.row.cells.slice(index + 1, index + colSpan)
        if(owns.length) this.owns = owns
    }

    get colSpan() {
        return this.node.colSpan
    }

    set rowSpan(rowSpan) {
        const index = this.row.index
        const owns = this.column.slice(index + 1, index + rowSpan)
        if(owns.length) this.owns = owns
    }

    get rowSpan() {
        return this.node.rowSpan
    }

    set owns(owns) {
        this.owns.forEach(cell => cell.hidden = false)
        this.node.colSpan = 1
        this.node.rowSpan = 1
        if(owns.length) {
            const last = owns[owns.length - 1]
            owns.forEach(cell => {
                cell.hidden = true
                if(cell.selected) cell.selected = 'false'
            })
            this.node.colSpan = last.index - this.index + 1
            this.node.rowSpan = last.row.index - this.row.index + 1
        }
        super.owns = owns
        this.grid.activeDescendant = this
        this.emit('change')
    }

    get owns() {
        return super.owns
    }

    get input() {
        return this.node.querySelector('input')
    }

    get text() {
        return this.node.querySelector('span.text')
    }

    set children(children) {
        super.children = [
            span({ className : 'text', children }),
            input({
                hidden : true,
                onblur : this.onInputBlur.bind(this)
            })
        ]
    }

    get children() {
        return super.children
    }

    set value(value) {
        const change = this.value !== value
        this.dataset.value = this.text.textContent = this.input.value = value
        if(!value) this.node.removeAttribute('data-value')
        if(change) this.emit('change')
    }

    get value() {
        return this.dataset.value
    }

    get columnHeader() {
        const head = this.grid.head
        if(head) {
            const row = head.rows[0]
            if(row) {
                const cell = row.cells[this.index]
                if(cell.node.tagName === 'TH') return cell
            }
        }
        return null
    }
}

export function gridcell(init) {
    return new GridCell('td', init)
}
