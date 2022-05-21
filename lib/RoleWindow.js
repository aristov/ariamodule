import { AriaExpanded } from './AriaExpanded.js'
import { AriaModal } from './AriaModal.js'
import { RoleRoleType } from './RoleRoleType.js'

/**
 * A browser or application window.
 * @see https://www.w3.org/TR/wai-aria-1.1/#window
 * @abstract
 */
export class RoleWindow extends RoleRoleType
{
  /**
   * @param {boolean|undefined} expanded
   */
  set expanded(expanded) {
    this.setAttr(AriaExpanded, expanded)
  }

  /**
   * @returns {boolean|undefined}
   */
  get expanded() {
    return this.getAttr(AriaExpanded)
  }

  /**
   * @param {boolean} modal
   */
  set modal(modal) {
    this.setAttr(AriaModal, modal)
  }

  /**
   * @returns {boolean}
   */
  get modal() {
    return this.getAttr(AriaModal)
  }
}
