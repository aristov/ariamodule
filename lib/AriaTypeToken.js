const AriaType = require('./AriaType')

/**
 * One of a limited set of allowed values. An explicit value
 *  of undefined for this type is the equivalent of providing no value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token
 * @abstract
 */
class AriaTypeToken extends AriaType
{
  static defaultValue = undefined

  /**
   * value === 'token'
   *      => 'token'
   *
   * value === 'undefined'
   * value === ''
   * no attr
   *      => undefined
   *
   * @param {ElemType} elem
   * @returns {string|undefined}
   */
  static get(elem) {
    const value = super.get(elem)
    if(value === 'undefined') {
      return undefined
    }
    return value
  }

  /**
   * @param {ElemType} elem
   * @param {string|undefined} value
   */
  static set(elem, value) {
    if(String(value) === 'undefined') {
      elem.node.removeAttribute(this.nodeName)
    }
    else super.set(elem, value)
  }
}

module.exports = AriaTypeToken
