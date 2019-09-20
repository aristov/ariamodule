import { ARIAChecked } from './ARIAChecked'
import { ARIASelected } from './ARIASelected'
import { Role } from './Role'
import { RoleGroup } from './RoleGroup'
import { RoleListItem } from './RoleListItem'
import { RoleTree } from './RoleTree'

/**
 * An option item of a tree. This is an element within a tree that may be expanded
 *  or collapsed if it contains a sub-level group of tree item elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#treeitem
 * @mixes RoleOption
 */
export class RoleTreeItem extends RoleListItem {
    /**
     * @param {boolean|string|undefined} checked
     */
    set checked(checked) {
        this.setAttr(ARIAChecked, checked)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get checked() {
        return this.getAttr(ARIAChecked)
    }

    /**
     * @returns {RoleGroup|null}
     */
    get group() {
        return this.find(RoleGroup)
    }

    /**
     * @returns {RoleTreeItem[]}
     */
    get items() {
        return this.findAll(RoleTreeItem)
    }

    /**
     * @returns {RoleTreeItem|null}
     */
    get parentItem() {
        const item = this.parentNode.closest(RoleTreeItem)
        return this.tree.contains(item)?
            item :
            null
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        this.setAttr(ARIASelected, selected)
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.getAttr(ARIASelected)
    }

    /**
     * @returns {RoleTree|null}
     */
    get tree() {
        return this.closest(RoleTree)
    }
}

export { RoleTreeItem as TreeItem }

Role.TreeItem = RoleTreeItem
