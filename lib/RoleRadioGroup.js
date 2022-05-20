import { AriaReadOnly } from './AriaReadOnly'
import { AriaRequired } from './AriaRequired'
import { RoleSelect } from './RoleSelect'

/**
 * A group of radio buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
export class RoleRadioGroup extends RoleSelect
{
  /**
   * @param {boolean} readOnly
   */
  set readOnly(readOnly) {
    this.setAttr(AriaReadOnly, readOnly)
  }

  /**
   * @returns {boolean}
   */
  get readOnly() {
    return this.getAttr(AriaReadOnly)
  }

  /**
   * @param {boolean} required
   */
  set required(required) {
    this.setAttr(AriaRequired, required)
  }

  /**
   * @returns {boolean}
   */
  get required() {
    return this.getAttr(AriaRequired)
  }
}

RoleRadioGroup.abstract = false
