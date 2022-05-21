import { AriaColCount } from './AriaColCount.js'
import { AriaRowCount } from './AriaRowCount.js'
import { RoleSection } from './RoleSection.js'

/**
 * A section containing data arranged in rows and columns.
 * @see https://www.w3.org/TR/wai-aria-1.1/#table
 */
export class RoleTable extends RoleSection
{
  /**
   * @param {number} colCount
   */
  set colCount(colCount) {
    this.setAttr(AriaColCount, colCount)
  }

  /**
   * @returns {number}
   */
  get colCount() {
    return this.getAttr(AriaColCount)
  }

  /**
   * @param {number} rowCount
   */
  set rowCount(rowCount) {
    this.setAttr(AriaRowCount, rowCount)
  }

  /**
   * @returns {number}
   */
  get rowCount() {
    return this.getAttr(AriaRowCount)
  }
}

RoleTable.abstract = false
