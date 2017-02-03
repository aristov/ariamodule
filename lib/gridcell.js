import { Cell } from './cell'
import { span, input } from 'htmlmodule'

const assign = Object.assign

export class GridCell extends Cell {

    init(init) {
        this.tabIndex = -1
        this.children = [
            span({ className : 'text' }),
            input({
                hidden : true,
                onblur : this.onInputBlur.bind(this)
            })
        ]
        assign(this.node, {
            onfocus : this.onFocus.bind(this),
            onkeydown : this.onKeyDown.bind(this),
            onmouseenter : this.onMouseEnter.bind(this),
            ondblclick : this.onDoubleClick.bind(this),
        })
        super.init(init)
    }

    onDoubleClick(event) {
        this.mode = 'edit'
    }

    onMouseEnter({ buttons }) {
        if(buttons === 1) {
            if(this.row.multiselectable || this.grid.multiselectable) {
                this.grid.activeDescendant = this
            }
        }
    }

    onFocus(event) {
        const grid = this.grid
        if(this.selected) {
            grid.selected = 'false'
            this.selected = 'true'
            grid.activeDescendant = this
        }
        grid.cells.forEach(c => c.tabIndex = -1)
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
        if(!this.readOnly && this.mode !== 'edit') {
            event.preventDefault()
            const filter = ({ selected }) => selected === 'true'
            const cells = this.grid.cells.filter(filter)
            cells.forEach(cell => {
                if(cell.value) cell.value = ''
                else if(cell.owns.length) cell.owns = []
            })
        }
    }

    onArrowKeyDown(event) {
        if(event.target === this.node) {
            event.preventDefault()
            const grid = this.grid
            const cell = event.shiftKey? grid.activeDescendant : this
            const { altKey, shiftKey, metaKey } = event
            if(cell) {
                const cells = cell.row.cells.filter(({ role }) => role === this.role)
                const column = cell.column.filter(({ role }) => role === this.role)
                const siblings = {
                    ArrowLeft : c => metaKey? cells[0] : c.prev,
                    ArrowRight : c => metaKey? cells[cells.length - 1] : c.next,
                    ArrowUp : c => metaKey? column[0] : c.above,
                    ArrowDown : c => metaKey? column[column.length - 1] : c.below
                }
                const sibling = siblings[event.key](cell)
                if(sibling) {
                    if(shiftKey) grid.activeDescendant = sibling
                    else if(altKey && !this.readOnly) this.replaceWith(sibling)
                    else sibling.focus()
                }
            }
        }
    }

    onEscapeKeyDown(event) {
        if(this.mode === 'edit') this.mode = 'navigation'
        else if(this.selected === 'true') this.grid.selected = 'false'
    }

    onInputBlur(event) {
        this.mode = 'navigation'
    }

    focus() {
        this.owner.node.focus()
    }

    replaceWith(cell) {
        if(this.value && cell) {
            if(this.owns.length) this.owns = []
            if(cell.owns.length) cell.owns = []
            const rows = this.body.rows
            const index1 = this.rowIndex
            const index2 = cell.rowIndex
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

    onEnterKeyDown(event) {
        if(this.mode === 'edit') {
            this.mode = 'navigation'
            this.node.focus()
        }
        else if(this.selected === 'true') {
            const filter = ({ selected }) => selected === 'true'
            const cells = this.grid.cells
            let selected = cells.filter(filter)
            const first = selected[0]
            const last = selected[selected.length - 1]
            const owns = last.owns
            if(selected.length > 1) {
                if(!this.readOnly) {
                    selected.forEach(c => {
                        if(c.owns.length) c.owns = []
                    })
                    first.owns = selected.slice(1).concat(owns)
                    first.focus()
                }
            }
            else this.mode = 'edit'
        }
    }

    set owns(owns) {
        const node = this.node
        this.owns.forEach(cell => cell.hidden = false)
        node.colSpan = 1
        node.rowSpan = 1
        if(owns.length) {
            const last = owns[owns.length - 1]
            owns.forEach(cell => cell.owner = this)
            node.colSpan = last.index - this.index + 1
            node.rowSpan = last.rowIndex - this.rowIndex + 1
        }
        super.owns = owns
        this.grid.activeDescendant = this
        this.emit('change')
    }

    get owns() {
        return super.owns
    }

    set owner(owner) {
        const value = this.value
        if(value) owner.value += ' + ' + value
        this.hidden = true
    }

    get owner() {
        if(this.hidden) {
            const selector = `td[aria-owns~=${ this.id }]`
            const node = this.grid.node.querySelector(selector)
            return node? node.assembler : this
        }
        else return this
    }

    set hidden(hidden) {
        if(hidden) {
            this.selected = 'false'
            this.value = ''
        }
        super.hidden = hidden
    }

    get hidden() {
        return super.hidden
    }

    set mode(mode) {
        if(!this.readOnly && mode !== this.mode) {
            const { input, text } = this
            if(mode === 'edit') {
                text.hidden = true
                input.hidden = false
                input.focus()
            } else if(mode === 'navigation') {
                this.value = input.value
                input.hidden = true
                text.hidden = false
            }
        }
        this.dataset = { mode }
    }

    get mode() {
        return this.dataset.mode || 'navigation'
    }

    set readOnly(readOnly) {
        if(readOnly) this.node.setAttribute('aria-readonly', 'true')
        else this.node.removeAttribute('aria-readonly')
    }

    get readOnly() {
        return this.grid.readOnly || this.node.getAttribute('aria-readonly') === 'true'
    }

    set required(required) {
        if(required) this.node.setAttribute('aria-required', 'true')
        else this.node.removeAttribute('aria-required')
    }

    get required() {
        return this.node.getAttribute('aria-required')
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

    get grid() {
        return this.node.closest('table').assembler
    }

    get row() {
        return this.node.parentNode.assembler
    }

    get prev() {
        const sibling = this.row.cells[this.index - 1]
        return sibling && !sibling.disabled? sibling.owner : null
    }

    get next() {
        const sibling = this.row.cells[this.index + this.colSpan]
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

    get body() {
        return this.row.body
    }

    get column() {
        return this.body.rows.map(r => r.cells[this.index])
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
        const index = this.rowIndex
        const owns = this.column.slice(index + 1, index + rowSpan)
        if(owns.length) this.owns = owns
    }

    get rowSpan() {
        return super.rowSpan
    }

    get input() {
        return this.node.querySelector('input')
    }

    get text() {
        return this.node.querySelector('span.text')
    }

    set value(value) {
        const change = this.value !== value
        this.dataset.value = this.text.textContent = this.input.value = value
        if(!value) this.node.removeAttribute('data-value')
        if(change) this.emit('change')
    }

    get value() {
        return this.dataset.value || ''
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

    static get classList() {
        return ['gridcell', super.classList]
    }

    static get role() {
        return ['gridcell', super.role]
    }
}

export function gridCell(init) {
    return new GridCell('td', init)
}

// self-killing instance
