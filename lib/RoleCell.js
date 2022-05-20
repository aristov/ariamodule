import { AriaColIndex } from './AriaColIndex'
import { AriaColSpan } from './AriaColSpan'
import { AriaRowIndex } from './AriaRowIndex'
import { AriaRowSpan } from './AriaRowSpan'
import { RoleSection } from './RoleSection'

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

  /**
   * @returns {RoleTable|null}
   */
  get table() {
    return this.closest(RoleCell.Table)
  }
}

RoleCell.abstract = false
