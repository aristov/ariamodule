import { AriaChecked } from './AriaChecked'
import { RoleInput } from './RoleInput'

/**
 * A checkable input in a group of elements with the same role,
 *  only one of which can be checked at a time.
 * @see https://www.w3.org/TR/wai-aria-1.1/#radio
 */
export class RoleRadio extends RoleInput
{
  /**
   * @param {boolean} checked
   */
  set checked(checked) {
    this.setAttr(AriaChecked, checked)
  }

  /**
   * @returns {boolean}
   */
  get checked() {
    return this.getAttr(AriaChecked) || false
  }
}

RoleRadio.abstract = false
