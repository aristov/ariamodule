import { ARIAActiveDescendant } from './ARIAActiveDescendant'
import { ARIALevel } from './ARIALevel'
import { ARIAMultiSelectable } from './ARIAMultiSelectable'
import { ARIAReadOnly } from './ARIAReadOnly'
import { Role } from './Role'
import { RoleGridCell } from './RoleGridCell'
import { RoleTable } from './RoleTable'

/**
 * A composite widget containing a collection of one or more rows with one
 *  or more cells where some or all cells in the grid are focusable by using
 *  methods of two-dimensional navigation, such as directional arrow keys.
 * @see https://www.w3.org/TR/wai-aria-1.1/#grid
 * @mixes RoleComposite
 */
export class RoleGrid extends RoleTable {
    /**
     * @param {RoleGridCell} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttr(ARIAActiveDescendant, activeDescendant)
    }

    /**
     * @returns {RoleGridCell}
     */
    get activeDescendant() {
        return this.getAttr(ARIAActiveDescendant)
    }

    /**
     * @returns {RoleGridCell[]}
     */
    get gridCells() {
        return this.findAll(RoleGridCell)
    }

    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(ARIALevel, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(ARIALevel)
    }

    /**
     * @param {boolean} multiSelectable
     */
    set multiSelectable(multiSelectable) {
        this.setAttr(ARIAMultiSelectable, multiSelectable)
    }

    /**
     * @returns {boolean}
     */
    get multiSelectable() {
        return this.getAttr(ARIAMultiSelectable)
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
     * Gell all selected cells
     * @returns {RoleGridCell[]}
     */
    get selectedCells() {
        return this.gridCells.filter(({ selected }) => selected)
    }
}

export { RoleGrid as Grid }

Role.Grid = RoleGrid
