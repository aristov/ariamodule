import { Role } from './Role'
import { Group } from './Group'
import { ListItem } from './ListItem'
import { Tree } from './Tree'
import { Checked } from './aria/Checked'
import { Selected } from './aria/Selected'

/**
 * @summary An option item of a tree. This is an element within a tree that may be expanded
 *  or collapsed if it contains a sub-level group of tree item elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#treeitem
 */
export class TreeItem extends ListItem {
    /**
     * @param {boolean|string|undefined} checked
     */
    set checked(checked) {
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get checked() {
        return this.getAttr(Checked)
    }

    /**
     * @returns {Group|null}
     */
    get group() {
        return this.find(Group)
    }

    /**
     * @returns {TreeItem[]}
     */
    get items() {
        return this.findAll(TreeItem)
    }

    /**
     * @returns {TreeItem|null}
     */
    get parentItem() {
        const item = this.parentNode.closest(TreeItem)
        return this.tree.contains(item)?
            item :
            null
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        this.setAttr(Selected, selected)
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.getAttr(Selected)
    }

    /**
     * @returns {Tree|null}
     */
    get tree() {
        return this.closest(Tree)
    }
}

export { TreeItem as ARIATreeItem }

Role.TreeItem = TreeItem
