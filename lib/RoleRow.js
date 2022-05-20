import { AriaColIndex } from './AriaColIndex'
import { AriaLevel } from './AriaLevel'
import { AriaMultiSelectable } from './AriaMultiSelectable'
import { AriaRowIndex } from './AriaRowIndex'
import { AriaSelected } from './AriaSelected'
import { RoleGroup } from './RoleGroup'

/**
 * A row of cells in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#row
 * @mixes RoleWidget
 */
export class RoleRow extends RoleGroup
{
  /**
   * @param {number} colIndex
   */
  set colIndex(colIndex) {
    this.setAttr(AriaColIndex, colIndex)
  }

  /**
   * @returns {number}
   */
  get colIndex() {
    return this.getAttr(AriaColIndex) || 0
  }

  /**
   * @param {number} level
   */
  set level(level) {
    this.setAttr(AriaLevel, level)
  }

  /**
   * @returns {number}
   */
  get level() {
    return this.getAttr(AriaLevel)
  }

  /**
   * @param {boolean} multiSelectable
   */
  set multiSelectable(multiSelectable) {
    this.setAttr(AriaMultiSelectable, multiSelectable)
  }

  /**
   * @returns {boolean}
   */
  get multiSelectable() {
    return this.getAttr(AriaMultiSelectable)
  }

  /**
   * @param {number} rowIndex
   */
  set rowIndex(rowIndex) {
    this.setAttr(AriaRowIndex, rowIndex)
  }

  /**
   * @returns {number}
   */
  get rowIndex() {
    const index = this.getAttr(AriaRowIndex)
    if(isNaN(index)) {
      const rows = (this.rowGroup || this.table).rows
      return rows.indexOf(this)
    }
    return index
  }

  /**
   * @param {boolean|undefined} selected
   */
  set selected(selected) {
    this.setAttr(AriaSelected, selected)
  }

  /**
   * @returns {boolean|undefined}
   */
  get selected() {
    return this.getAttr(AriaSelected)
  }
}
