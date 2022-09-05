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
   * @param {ElemType} elem
   * @param {string|undefined} value
   */
  static set(elem, value) {
    if(String(value) === 'undefined') {
      delete elem.vnode.attributes[this.nodeName]
    }
    else super.set(elem, value)
  }
}

module.exports = AriaTypeToken
