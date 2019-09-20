import { RoleCell } from './RoleCell'
import { Role } from './Role'
import { ARIAReadOnly } from './ARIAReadOnly'
import { ARIARequired } from './ARIARequired'
import { ARIASelected } from './ARIASelected'

/**
 * A cell in a grid or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#gridcell
 * @mixes RoleWidget
 */
export class RoleGridCell extends RoleCell {
    /**
     * @returns {RoleGridCell[]}
     */
    get column() {
        const group = this.rowGroup || this.grid
        const index = this.colIndex
        return group.findAll(RoleCell, ({ colIndex }) => colIndex === index)
    }

    /**
     * @returns {RoleGrid}
     */
    get grid() {
        return this.closest(Role.Grid)
    }
    
    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ARIAReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ARIAReadOnly)
    }

    /**
     * @param {boolean} required
     */
    set required(required) {
        this.setAttr(ARIARequired, required)
    }

    /**
     * @returns {boolean}
     */
    get required() {
        return this.getAttr(ARIARequired)
    }

    /**
     * @param {boolean|undefined} selected
     */
    set selected(selected) {
        this.setAttr(ARIASelected, selected)
    }

    /**
     * @returns {boolean|undefined}
     */
    get selected() {
        return this.getAttr(ARIASelected)
    }
}

export { RoleGridCell as GridCell, RoleGridCell as ARIAGridCell }

Role.GridCell = RoleGridCell
