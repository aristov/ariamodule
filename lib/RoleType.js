const { ElemType, HtmlType } = require('htmlmodule')
const innerText = Object.getOwnPropertyDescriptor(HtmlType.prototype, 'innerText')

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
class RoleType extends ElemType
{
  static class = undefined
}

Object.defineProperty(RoleType.prototype, 'innerText', innerText)

RoleType.defineMethods([
  'blur',
  'click',
  'focus',
])

RoleType.defineProps({
  autofocus : 'autofocus',
  contentEditable : 'contenteditable',
  inputMode : 'inputmode',
  lang : 'lang',
  tabIndex : 'tabindex',
  translate : 'translate',
})

module.exports = RoleType
