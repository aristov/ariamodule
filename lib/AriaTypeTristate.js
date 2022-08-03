const AriaType = require('./AriaType')

/**
 * Value representing true or false, with an intermediate "mixed" value.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_tristate
 * @abstract
 */
class AriaTypeTristate extends AriaType
{
  static defaultValue = undefined

  /**
   * value === 'true'
   * value === '0'
   * value === '*' // non empty string
   *      => true
   *
   * value === 'false'
   *      => false
   *
   * value === 'mixed'
   *      => 'mixed'
   *
   * value === 'undefined'
   * value === ''
   * no attr
   *      => undefined
   *
   * @param {ElemType} elem
   * @returns {boolean|string}
   */
  static get(elem) {
    const value = super.get(elem)
    if(!value) {
      return value
    }
    if(value === 'mixed') {
      return 'mixed'
    }
    return value === 'undefined' ?
      undefined :
      Boolean(value) && value !== 'false'
  }

  /**
   * value = true
   * value = 'true'
   * value = '*' // non empty string
   * value = 1
   * value = * // non zero number
   *      => 'true'
   *
   * value = false
   * value = 'false'
   * value = 0
   *      => 'false'
   *
   * value = 'mixed'
   *      => 'mixed'
   *
   * value = null
   * value = undefined
   * value = ''
   *      => no attr
   *
   * @param {ElemType} elem
   * @param {*} value {boolean|string}
   */
  static set(elem, value) {
    if(String(value) === 'undefined' || value === '') {
      delete elem.vnode.attributes[this.nodeName]
    }
    else if(value === 'mixed') {
      super.set(elem, 'mixed')
    }
    else super.set(elem, String(Boolean(value) && value !== 'false'))
  }
}

module.exports = AriaTypeTristate
