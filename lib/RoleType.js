const { ElemType } = require('htmlmodule')

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
class RoleType extends ElemType
{
  static prefix = 'Role'
}

RoleType.defineMethods([
  'blur',
  'click',
  'focus',
])

RoleType.defineProps([
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

RoleType.defineProps([
  'autofocus',
  'contentEditable',
  'innerText',
  'inputMode',
  'tabIndex',
], true)

module.exports = RoleType
