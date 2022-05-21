import { AriaTypeToken } from './AriaTypeToken.js'

/**
 * Indicates the availability and type of interactive popup element,
 *  such as menu or dialog, that can be triggered by an element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
 */
export class AriaHasPopup extends AriaTypeToken
{
  static defaultValue = false
}
