import { ARIAMultiSelectable } from './ARIAMultiSelectable'
import { ARIARequired } from './ARIARequired'
import { Role } from './Role'
import { RoleSelect } from './RoleSelect'
import { RoleTreeItem } from './RoleTreeItem'

/**
 * A type of select that may contain sub-level
 *  nested groups that can be collapsed and expanded.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tree
 */
export class RoleTree extends RoleSelect {
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
     * @param {string} orientation
     */
    set orientation(orientation) {
        super.orientation = orientation
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return super.orientation || 'vertical'
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
     * @returns {RoleTreeItem[]}
     */
    get items() {
        return this.findAll(RoleTreeItem)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleTree as Tree }

Role.Tree = RoleTree
