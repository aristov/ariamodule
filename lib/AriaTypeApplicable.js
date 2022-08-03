const AriaType = require('./AriaType')

/**
 * Value representing true, false, or not applicable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false-undefined
 * @abstract
 */
class AriaTypeApplicable extends AriaType
{
  static defaultValue = undefined

  /**
   * value === 'true'
   * value === '*' // non empty string
   *      => true
   *
   * value === 'false'
   *      => false
   *
   * value === 'undefined'
   * value === ''
   * no attr
   *      => undefined
   *
   * @param {ElemType} elem
   * @returns {boolean|undefined}
   */
  static get(elem) {
    const value = super.get(elem)
    if(value) {
      return value === 'undefined' ?
        undefined :
        Boolean(value) && value !== 'false'
    }
    return value
  }

  /**
   * value = true
   * value = 'true'
   * value = '*' // non empty string
   *      => 'true'
   *
   * value = false
   * value = 'false'
   *      => 'false'
   *
   * value = undefined
   * value = 'undefined'
   * value = ''
   *      => no attr
   *
   * @param {ElemType} elem
   * @param {*} value {boolean|undefined|string}
   */
  static set(elem, value) {
    if(String(value) === 'undefined' || value === '') {
      delete elem.vnode.attributes[this.nodeName]
    }
    else super.set(elem, String(Boolean(value) && value !== 'false'))
  }
}

module.exports = AriaTypeApplicable
