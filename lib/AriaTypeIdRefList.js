const AriaType = require('./AriaType')

/**
 * A list of one or more ID references.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list
 * @abstract
 */
class AriaTypeIdRefList extends AriaType
{
  static defaultValue = []

  /**
   * @param {ElemType} elem
   * @returns {string[]}
   */
  static get(elem) {
    const value = elem.vnode.attributes[this.nodeName]
    return value ? value.split(' ') : this.defaultValue
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
    else delete elem.vnode.attributes[this.nodeName]
  }
}

module.exports = AriaTypeIdRefList
