import { GridCell } from './gridcell'
import { textarea } from 'htmlmodule'

const CHARACTER_KEY_RE = /^[a-zа-я0-9!\/\$%\.\s]$/i
const SELECT_ALL_KEY_RE = /^[aф]$/i

export class GridCellInput extends GridCell {
    init(init) {
        super.init(init)
        this.append(textarea({
            hidden : true,
            onblur : this.onInputBlur.bind(this),
            onchange : this.onInputChange.bind(this),
            onkeypress : this.onInputKeyPress.bind(this),
            onkeydown : this.onInputKeyDown.bind(this)
        }))
        this.on('dblclick', this.onDoubleClick.bind(this))
    }

    onInputKeyPress(event) {
        // Fix for MS Windows, where event.key is not equal 'Enter'
        if(event.code === 'Enter') {
            if(event.ctrlKey) this.insertLineBreak(event.target)
            else event.preventDefault()
        }
    }

    onInputKeyDown(event) {
        if(event.key === 'Enter') {
            if(event.metaKey) {
                this.insertLineBreak(event.target)
                event.stopPropagation()
            }
            else if(event.ctrlKey) event.stopPropagation()
            else event.preventDefault()
        }
    }

    insertLineBreak(input) {
        const value = input.value
        const start = value.substr(0, input.selectionStart)
        const end = value.substr(input.selectionEnd)
        const index = start.length + 1
        input.value = start + '\n' + end
        input.setSelectionRange(index, index)
    }

    onInputChange(event) {
        event.stopPropagation()
        // this.emit('change', { bubbles : true })
    }

    onDoubleClick() {
        this.mode = 'edit'
    }

    onKeyDown(event) {
        super.onKeyDown(event)
        if(CHARACTER_KEY_RE.test(event.key)) {
            this.onCharacterKeyDown(event)
        }
        else if(event.key === 'Backspace') {
            this.onBackspaceKeyDown(event)
        }
        else if(event.key === 'Enter') {
            this.onEnterKeyDown(event)
        }
    }

    onCharacterKeyDown(event) {
        if(this.mode === 'navigation') {
            if(SELECT_ALL_KEY_RE.test(event.key) && (event.metaKey || event.ctrlKey)) {
                this.onSelectAllKeyDown(event)
            }
            else if(!event.metaKey) this.mode = 'edit'
        }
    }

    onBackspaceKeyDown(event) {
        if(!this.readOnly && this.mode !== 'edit') {
            event.preventDefault()
            const grid = this.grid
            const selectedCells = grid.selectedCells
            if(selectedCells.length > 1) {
                selectedCells.forEach(cell => {
                    if(cell !== this) cell.selected = 'false'
                })
                grid.activeDescendant = this
            }
            else {
                const { value, rowSpan } = this
                if(event.metaKey || event.ctrlKey) {
                    if(value) this.confirmClear(() => {
                        this.value = ''
                        if(rowSpan > 1) this.rowSpan = 1
                        this.emit('change', { bubbles : true })
                    })
                    else if(rowSpan > 1) this.rowSpan = 1
                    grid.activeDescendant = this
                }
                else if(rowSpan > 1) {
                    this.rowSpan--
                    this.emit('change', { bubbles : true })
                    grid.activeDescendant = this
                }
                else if(value) {
                    this.confirmClear(() => {
                        this.value = ''
                        this.emit('change', { bubbles : true })
                    })
                }
            }
        }
    }

    confirmClear(callback) {
        callback.call(this)
    }

    onEscapeKeyDown(event) {
        if(this.mode === 'edit') {
            this.value = this.dataset.value || ''
            this.mode = 'navigation'
            this.focus()
        }
        else super.onEscapeKeyDown(event)
    }

    onInputBlur() {
        this.mode = 'navigation'
    }

    onEnterKeyDown() {
        if(this.mode === 'edit') {
            this.mode = 'navigation'
            this.focus()
        }
        else if(this.selected === 'true') {
            const selectedCells = this.grid.selectedCells
            if(selectedCells.length > 1) {
                this.grid.mergeCells(selectedCells)
            }
            else this.mode = 'edit'
        }
        else this.mode = 'edit'
    }
    
    clear() {
        this.value = ''
        this.owns = []
    }

    setEditMode() {
        this.dataset.mode = 'edit'
        this.textElement.hidden = true
        this.input.hidden = false
        this.input.focus()
    }

    setNavigationMode() {
        const change = this.dataset.value !== this.input.value
        this.dataset.mode = 'navigation'
        this.value = this.input.value
        this.input.hidden = true
        this.textElement.hidden = false
        if(change) this.emit('change', { bubbles : true })
    }

    set owner(owner) {
        const value = this.value
        if(value) {
            owner.value = [owner.value, value].filter(v => v.trim()).join(' + ')
        }
        super.ownerCell = owner
    }

    get ownerCell() {
        return super.ownerCell
    }

    set hidden(hidden) {
        if(hidden) this.value = ''
        super.hidden = hidden
    }

    get hidden() {
        return super.hidden
    }

    set mode(mode) {
        if(!this.readOnly && mode !== this.mode) {
            if(mode === 'edit') this.setEditMode()
            else this.setNavigationMode()
        }
    }

    get mode() {
        return this.dataset.mode || 'navigation'
    }

    get input() {
        return this.node.querySelector('textarea')
    }

    set value(value) {
        super.value = this.input.value = value
    }

    get value() {
        return this.input.value || ''
    }
}

/**
 * @param {*} init
 * @returns {GridCell}
 */
export function gridCellInput(...init) {
    return new GridCellInput(...init)
}
