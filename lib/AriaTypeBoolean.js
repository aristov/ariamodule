const AriaType = require('./AriaType')

/**
 * Value representing either true or false.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false
 * @abstract
 */
class AriaTypeBoolean extends AriaType
{
  static defaultValue = false

  /**
   * value === 'true'
   * value === '*' // non empty string
   *      => true
   *
   * value === 'false'
   * value === ''
   * no attr
   *      => false
   *
   * @param {ElemType} elem
   * @returns {boolean}
   */
  static get(elem) {
    const value = super.get(elem)
    return Boolean(value) && value !== 'false'
  }

  /**
   * value = true
   * value = 'true'
   * value = '*' // non empty string
   * value = 1
   * value = * // non zero
   *      => 'true'
   *
   * value = false
   * value = 'false'
   * value = ''
   * value = null
   * value = undefined
   * value = 0
   *      => no attr
   *
   * @param {ElemType} elem
   * @param {*} value {boolean|string|number|null|undefined}
   */
  static set(elem, value) {
    if(value && value !== 'false') {
      super.set(elem, 'true')
    }
    else elem.node.removeAttribute(this.nodeName)
  }
}

module.exports = AriaTypeBoolean
