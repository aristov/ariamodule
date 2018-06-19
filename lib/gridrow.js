// uimodule
import { Row } from './row'

export class GridRow extends Row {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('focus', this.onFocus.bind(this))
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        if(this.selected !== undefined) {
            this.table.findAll(GridRow).forEach(row => {
                if(row.selected !== undefined) {
                    row.selected = row === this
                }
            })
        }
    }

    /**
     * @param {KeyboardEvent} event
     * fixme: move to onKeyUp and check if KeyDown was pressed before
     */
    onKeyDown(event) {
        if(event.key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        if(['Enter', ' '].includes(event.key)) {
            event.preventDefault()
            this.emit('click', {
                bubbles : true,
                cancelable : true
            })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        let row
        if(event.key === 'ArrowUp') {
            row = this.previousRow
        }
        if(event.key === 'ArrowDown') {
            row = this.nextRow
        }
        if(row) {
            event.preventDefault()
            this.tabIndex = -1
            row.tabIndex = 0
            row.focus()
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
 * @param {*} [init]
 * @returns {GridRow}
 */
export function gridRow(init) {
    return new GridRow(init)
}
