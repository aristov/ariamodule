import { AriaTypeToken } from './AriaTypeToken.js'

/**
 * Indicates the element that represents the current item
 *  within a container or set of related elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-current
 */
export class AriaCurrent extends AriaTypeToken
{
  static defaultValue = false
}
