// uimodule
import { Row } from './Row'

let undefined

export class GridRow extends Row {
    /**
     * @param {{}} init
     */
    init(init) {
        this.on('focus', this.onFocus)
        this.on('keydown', this.onKeyDown)
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const parent = this.body || this.table
        parent.rows.forEach(row => {
            row.tabIndex = row === this? 0 : -1
        })
        if(this.selected !== undefined) {
            this.grid.rows.forEach(row => row.selected = row === this)
        }
    }

    /**
     * @param {KeyboardEvent} event
     * fixme: move to onKeyUp and check if KeyDown was pressed before
     */
    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        else if(['Enter', ' '].includes(key)) {
            event.preventDefault()
            this.emit('click', { bubbles : true, cancelable : true })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        event.preventDefault()
        const key = event.key
        let row
        if(key === 'ArrowUp') {
            row = this.previousRow
        }
        else if(key === 'ArrowDown') {
            row = this.nextRow
        }
        if(row) {
            const style = getComputedStyle(row.ownerElement.node)
            if(style.display !== 'none') {
                event.preventDefault()
                row.focus()
            }
        }
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        if(!this.elementIndex) {
            this.tabIndex = 0
        }
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
    }
}

/**
 * @param {{}} init
 * @returns {GridRow}
 */
export function gridRow(...init) {
    return new GridRow(...init)
}
