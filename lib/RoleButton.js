import { AriaExpanded } from './AriaExpanded.js'
import { AriaPressed } from './AriaPressed.js'
import { RoleCommand } from './RoleCommand.js'

/**
 * An input that allows for user-triggered actions when clicked or pressed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#button
 */
export class RoleButton extends RoleCommand
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
   * @param {boolean|string|undefined} pressed
   */
  set pressed(pressed) {
    this.setAttr(AriaPressed, pressed)
  }

  /**
   * @returns {boolean|string|undefined}
   */
  get pressed() {
    return this.getAttr(AriaPressed)
  }
}

RoleButton.abstract = false
