import { AriaTypeToken } from './AriaTypeToken.js'

/**
 * Indicates the entered value does not conform to the format expected by the application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-invalid
 */
export class AriaInvalid extends AriaTypeToken
{
  static defaultValue = false
}
