const AriaType = require('./AriaType')

/**
 * A list of one or more tokens.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token_list
 * @abstract
 */
class AriaTypeTokenList extends AriaType
{
  static defaultValue = []

  /**
   * @param {ElemType} elem
   * @returns {string[]}
   */
  static get(elem) {
    const value = elem.node.getAttribute(this.nodeName)
    return value? value.split(' ') : this.defaultValue
  }

  /**
   * @param {ElemType} elem
   * @param {*} value {string[]|string}
   */
  static set(elem, value) {
    if(!Array.isArray(value)) {
      super.set(elem, value)
      return
    }
    const list = value.filter(Boolean)
    if(list.length) {
      super.set(elem, list.join(' '))
    }
    else elem.node.removeAttribute(this.nodeName)
  }
}

module.exports = AriaTypeTokenList
