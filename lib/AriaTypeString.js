const AriaType = require('./AriaType')

/**
 * Unconstrained value type.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_string
 * @abstract
 */
class AriaTypeString extends AriaType
{
  static defaultValue = ''
}

module.exports = AriaTypeString
