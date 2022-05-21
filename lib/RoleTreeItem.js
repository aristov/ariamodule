import { AriaChecked } from './AriaChecked.js'
import { AriaSelected } from './AriaSelected.js'
import { RoleListItem } from './RoleListItem.js'

/**
 * An option item of a tree. This is an element within a tree that may be expanded
 *  or collapsed if it contains a sub-level group of tree item elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#treeitem
 * @mixes RoleOption
 */
export class RoleTreeItem extends RoleListItem
{
  /**
   * @param {boolean|string|undefined} checked
   */
  set checked(checked) {
    this.setAttr(AriaChecked, checked)
  }

  /**
   * @returns {boolean|string|undefined}
   */
  get checked() {
    return this.getAttr(AriaChecked)
  }

  /**
   * @param {boolean} selected
   */
  set selected(selected) {
    this.setAttr(AriaSelected, selected)
  }

  /**
   * @returns {boolean}
   */
  get selected() {
    return this.getAttr(AriaSelected)
  }
}
