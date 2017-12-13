import { TextArea } from 'htmlmodule'
import { GridCell } from './gridcell'

const CHARACTER_KEY_RE = /^[a-zа-я0-9!\/\$%\.\s]$/i

export class DataCell extends GridCell {
    init(init) {
        super.init(init)
        this.on('dblclick', this.onDoubleClick.bind(this))
    }

    onInputKeyPress(event) {
        // Fix for MS Windows, where event.key is not equal 'Enter'
        if(event.code === 'Enter') {
            if(event.ctrlKey) this.insertLineBreak()
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

    insertLineBreak() {
        const input = this.input
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
    }

    onCharacterKeyDown(event) {
        if(this.mode === 'navigation' && !event.metaKey) {
            this.mode = 'edit'
        }
    }

    onSelectAllKeyDown(event) {
        if(this.mode === 'navigation') {
            super.onSelectAllKeyDown(event)
        }
    }

    onBackspaceKeyDown(event) {
        event.preventDefault()
        if(!this.readOnly && this.mode !== 'edit') {
            const grid = this.grid
            const selectedCells = grid.selectedCells
            const { value, rowSpan } = this
            if(event.metaKey || event.ctrlKey) {
                if(value) {
                    this.confirmClear(() => {
                        this.value = ''
                        if(rowSpan > 1) this.rowSpan = 1
                        this.emit('change', { bubbles : true })
                    })
                }
                else if(rowSpan > 1) this.rowSpan = 1
                grid.activeDescendant = this
            }
            else if(selectedCells.length > 1 || rowSpan > 1) {
                super.onBackspaceKeyDown(event)
            }
            else if(value) {
                this.confirmClear(() => {
                    this.value = ''
                    this.emit('change', { bubbles : true })
                })
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

    onEnterKeyDown(event) {
        const grid = this.grid
        if(this.mode === 'edit') {
            this.mode = 'navigation'
            this.focus()
        }
        else if(this.selected === 'true'
            && grid.multiselectable
            && grid.selectedCells.length > 1) {
            super.onEnterKeyDown(event)
        }
        else this.mode = 'edit'
    }
    
    clear() {
        this.value = ''
        if(this.owns.length) this.owns = []
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
        return this.find(TextArea) || new TextArea({
            parentNode : this,
            hidden : true,
            onblur : this.onInputBlur.bind(this),
            onchange : this.onInputChange.bind(this),
            onkeypress : this.onInputKeyPress.bind(this),
            onkeydown : this.onInputKeyDown.bind(this)
        })
    }

    set value(value) {
        super.value = this.input.value = value
    }

    get value() {
        return this.input.value
    }
}

/**
 * @param {*} [init]
 * @returns {GridCell}
 */
export function dataCell(...init) {
    return new DataCell(...init)
}
