// uimodule
import { Row } from './row'

export class GridRow extends Row {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = -1
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('focus', this.onFocus.bind(this))
        this.on('blur', this.onBlur.bind(this))
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
        if(this.selected) {
            this.selected = 'true'
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onBlur(event) {
        if(this.selected) {
            this.selected = 'false'
        }
    }

    /**
     * @param {KeyboardEvent} event
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
 * @param {*} [init]
 * @returns {GridRow}
 */
export function gridRow(...init) {
    return new GridRow(...init)
}
