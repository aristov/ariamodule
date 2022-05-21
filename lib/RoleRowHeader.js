import { AriaSort } from './AriaSort.js'
import { RoleCell } from './RoleCell.js'

/**
 * A cell containing header information for a row in a grid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#rowheader
 * @mixes RoleGridCell
 * @mixes RoleSectionHead
 */
export class RoleRowHeader extends RoleCell
{
  /**
   * @param {string} sort
   */
  set sort(sort) {
    this.setAttr(AriaSort, sort)
  }

  /**
   * @returns {string}
   */
  get sort() {
    return this.getAttr(AriaSort)
  }
}
