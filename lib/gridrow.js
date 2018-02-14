import { Row } from './row'

export class GridRow extends Row {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = -1
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        let row
        if(key === 'ArrowUp') row = this.previousRow
        if(key === 'ArrowDown') row = this.nextRow
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
        if(!this.elementIndex) this.tabIndex = 0
    }

    /**
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return super.parentNode
    }
}
