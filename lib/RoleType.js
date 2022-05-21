const { document } = require('xwindow')
const { Dataset, DomElem, Style } = require('htmlmodule')

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
class RoleType extends DomElem
{
  static localName = 'div'

  static prefix = 'Role'

  /**
   * @override
   * @return {*|HTMLDivElement}
   */
  createNode() {
    return document.createElement(this.constructor.localName)
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    this.setRoleAttr()
    super.init(deep)
  }

  setRoleAttr() {
    let constructor = this.constructor
    const prefix = constructor.prefix
    do if(constructor.name.startsWith(prefix)) {
      this.node.setAttribute('role', constructor.name.slice(prefix.length))
      return
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }
}

RoleType.defineAttrs([
  Dataset,
  Style,
])

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
