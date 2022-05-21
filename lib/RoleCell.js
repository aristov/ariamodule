import { AriaColIndex } from './AriaColIndex.js'
import { AriaColSpan } from './AriaColSpan.js'
import { AriaRowIndex } from './AriaRowIndex.js'
import { AriaRowSpan } from './AriaRowSpan.js'
import { RoleSection } from './RoleSection.js'

/**
 * A cell in a tabular container.
 * @see https://www.w3.org/TR/wai-aria-1.1/#cell
 */
export class RoleCell extends RoleSection
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
    const index = this.getAttr(AriaColIndex)
    return isNaN(index)?
      this.row.cells.indexOf(this) :
      index
  }

  /**
   * @param {number} colSpan
   */
  set colSpan(colSpan) {
    this.setAttr(AriaColSpan, colSpan)
  }

  /**
   * @returns {number}
   */
  get colSpan() {
    return this.getAttr(AriaColSpan)
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
    return isNaN(index)?
      this.row.rowIndex :
      index
  }

  /**
   * @param {number} rowSpan
   */
  set rowSpan(rowSpan) {
    this.setAttr(AriaRowSpan, rowSpan)
  }

  /**
   * @returns {number}
   */
  get rowSpan() {
    return this.getAttr(AriaRowSpan)
  }
}

RoleCell.abstract = false
