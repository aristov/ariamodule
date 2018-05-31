import { AttrAssembler } from 'dommodule/lib/attr'
import { HTMLElementAssembler } from 'htmlmodule/lib/element'
import { ARIAAttrAssembler } from './aria/aria'

const { getPrototypeOf } = Object
const { document } = window
const { defaultPropertyName } = HTMLElementAssembler
const CLASS_PREFIX_RE = /^ARIA/
const EMPTY_STRING = ''
const OWNER_ELEMENT_PROPERTY_NAME = 'ownerElement'
const ROLE_ATTR_NAME = 'role'
const ROLE_SEPARATOR = ' '

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
export class RoleAttrAssembler extends AttrAssembler {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this.node.value = this.constructor.roleList.join(ROLE_SEPARATOR)
        this.ownerElement = init && init.constructor === Object && init.ownerElement
            || new this.constructor.elementAssembler
        this.classList = this.constructor.classList
    }

    /**
     * @param {*} siblings
     */
    after(...siblings) {
        this.ownerElement.after(...siblings)
    }

    /**
     * @param {*} childNodes
     */
    append(...childNodes) {
        this.ownerElement.append(...childNodes)
    }

    /**
     * @param {*} siblings
     */
    before(...siblings) {
        this.ownerElement.before(...siblings)
    }

    /**
     * Blur the owner element
     */
    blur() {
        this.ownerElement.blur()
    }

    /**
     * Click the owner element
     */
    click() {
        this.ownerElement.click()
    }

    /**
     * @param {class|string} object
     * @returns {*|null}
     */
    closest(object) {
        return this.ownerElement.closest(object)
    }

    /**
     * @param {RoleAttrAssembler|ChildNodeAssembler|ChildNode|*} object
     * @returns {boolean}
     */
    contains(object) {
        return this.ownerElement.contains(this.constructor.getElementInstanceOf(object))
    }

    /**
     * @param {string} type
     * @param {CustomEventInit|{}} [eventInitDict]
     * @returns {boolean}
     */
    emit(type, eventInitDict) {
        return this.ownerElement.emit(type, eventInitDict)
    }

    /**
     * @param {class|string|*} subject
     * @param {function|string} [filter]
     * @returns {ChildNodeAssembler|*|null}
     */
    find(subject, filter) {
        return this.ownerElement.find(subject, filter)
    }

    /**
     * @param {class|string|*} subject
     * @param {function|string} [filter]
     * @returns {array.ElementAssembler|array.AttrAssembler|*}
     */
    findAll(subject, filter) {
        return this.ownerElement.findAll(subject, filter)
    }

    /**
     * Focus the owner element
     */
    focus() {
        this.ownerElement.focus()
    }

    /**
     * @param {class|string} attr
     * @returns {string|*|null}
     */
    getAttribute(attr) {
        return this.ownerElement.getAttribute(attr)
    }

    /**
     * @param {RoleAttrAssembler|ElementAssembler|Element} object
     * @returns {ElementAssembler|*|null}
     */
    getElementInstanceOf(object) {
        return this.constructor.getElementInstanceOf(object)
    }

    /**
     * @param {RoleAttrAssembler|ElementAssembler|Element} object
     * @returns {Element|*|null}
     */
    getElementNodeOf(object) {
        return this.constructor.getElementNodeOf(object)
    }

    /**
     * @param {Element|ElementAssembler|RoleAttrAssembler|*} object
     * @returns {RoleAttrAssembler|*|null}
     */
    getRoleOf(object) {
        return this.constructor.getRoleOf(object)
    }

    /**
     * @param {class|string} attr
     * @returns {boolean}
     */
    hasAttribute(attr) {
        return this.ownerElement.hasAttribute(attr)
    }

    /**
     * @param {*} childNodes
     */
    prepend(...childNodes) {
        this.ownerElement.prepend(...childNodes)
    }

    /**
     * Remove the owner element from a tree
     */
    remove() {
        this.ownerElement.remove()
    }

    /**
     * @param {class|string} attr
     */
    removeAttribute(attr) {
        this.ownerElement.removeAttribute(attr)
    }

    /**
     * @param {*} objects
     */
    replaceWith(...objects) {
        this.ownerElement.replaceWith(...objects)
    }

    /**
     * @param {string} type
     * @param {function} callback
     * @param {Object} [capture]
     */
    on(type, callback, capture) {
        this.ownerElement.on(type, callback, capture)
    }

    /**
     * @param {class|string} attr
     * @param {*} value
     */
    setAttribute(attr, value) {
        this.ownerElement.setAttribute(attr, value)
    }

    /**
     * @param {string} name
     * @param {string} value
     */
    setProperty(name, value) {
        if(name !== OWNER_ELEMENT_PROPERTY_NAME) {
            super.setProperty(name, value)
        }
    }

    /**
     * @param {string} name
     * @param {string} value
     */
    setPropertyFallback(name, value) {
        this.ownerElement.setProperty(name, value)
    }

    /**
     * @param {string} type
     * @param {function} callback
     * @param {boolean} [capture]
     */
    un(type, callback, capture) {
        this.ownerElement.un(type, callback, capture)
    }

    /**
     * @param {*} children
     */
    set children(children) {
        this.ownerElement.children = children
    }

    /**
     * @returns {(ElementAssembler)[]}
     */
    get children() {
        return this.ownerElement.children
    }

    /**
     * @param {*} classList
     */
    set classList(classList) {
        this.ownerElement.classList = classList
    }

    /**
     * @returns {DOMTokenList}
     */
    get classList() {
        return this.ownerElement.classList
    }

    /**
     * @param {string} className
     */
    set className(className) {
        this.ownerElement.className = className
    }

    /**
     * @returns {string}
     */
    get className() {
        return this.ownerElement.className
    }

    /**
     * @param {*} dataset
     */
    set dataset(dataset) {
        this.ownerElement.dataset = dataset
    }

    /**
     * @returns {DOMStringMap}
     */
    get dataset() {
        return this.ownerElement.dataset
    }

    /**
     * @returns {number}
     */
    get elementIndex() {
        return this.ownerElement.elementIndex
    }

    /**
     * @param {string} id
     */
    set id(id) {
        this.ownerElement.id = id
    }

    /**
     * @return {string}
     */
    get id() {
        return this.ownerElement.id
    }

    /**
     * @param {string} innerHTML
     */
    set innerHTML(innerHTML) {
        this.ownerElement.innerHTML = innerHTML
    }

    /**
     * @returns {string}
     */
    get innerHTML() {
        return this.ownerElement.innerHTML
    }

    /**
     * @param {string} innerText
     */
    set innerText(innerText) {
        this.ownerElement.innerText = innerText
    }

    /**
     * @returns {string}
     */
    get innerText() {
        return this.ownerElement.innerText
    }

    /**
     * @param {*} parentElement
     */
    set parentElement(parentElement) {
        this.ownerElement.parentElement = parentElement
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get parentElement() {
        return this.ownerElement.parentElement
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        this.ownerElement.parentNode = parentNode
    }

    /**
     * @returns {ParentNodeAssembler|*|null}
     */
    get parentNode() {
        return this.ownerElement.parentNode
    }

    /**
     * @returns {RoleAttrAssembler|*|null}
     */
    get parentRole() {
        const parentElement = this.parentElement
        return parentElement && parentElement.role
    }

    /**
     * @param {*} parent
     */
    set parent(parent) {
        this.ownerElement.parentNode = parent
    }

    /**
     * @returns {RoleAttrAssembler|ParentNodeAssembler|*|null}
     */
    get parent() {
        const ownerElement = this.ownerElement
        const parentElement = ownerElement.parentElement
        return parentElement?
            parentElement.role || parentElement :
            ownerElement.parentNode
    }

    /**
     * @param {*} style
     */
    set style(style) {
        this.ownerElement.style = style
    }

    /**
     * @returns {CSSStyleDeclaration}
     */
    get style() {
        return this.ownerElement.style
    }

    /**
     * @param {Number|null} tabIndex
     */
    set tabIndex(tabIndex) {
        this.ownerElement.tabIndex = tabIndex
    }

    /**
     * @returns {Number|null}
     */
    get tabIndex() {
        return this.ownerElement.tabIndex
    }

    /**
     * @param {string} textContent
     */
    set textContent(textContent) {
        this.ownerElement.textContent = textContent
    }

    /**
     * @returns {string}
     */
    get textContent() {
        return this.ownerElement.textContent
    }

    /**
     * @param {string} value
     */
    set value(value) {
        throw Error(`Failed to set 'value' on '${ this.constructor.name }': the role attribute must not be changed`)
    }

    /**
     * @returns {string}
     */
    get value() {
        return super.value
    }

    /**
     * @param {*} [init]
     */
    static create(init) {
        if(this.abstract) {
            throw TypeError(`Could not create an abstract ${ this.name } instance`)
        }
        return document.createAttribute(this.localName)
    }

    /**
     * @param {RoleAttrAssembler|ElementAssembler|Element} object
     * @returns {ElementAssembler|*|null}
     */
    static getElementInstanceOf(object) {
        return object instanceof RoleAttrAssembler?
            object.ownerElement :
            this.getInstanceOf(object)
    }

    /**
     * @param {RoleAttrAssembler|ElementAssembler|Element} object
     * @returns {Element|*|null}
     */
    static getElementNodeOf(object) {
        return object instanceof RoleAttrAssembler?
            object.ownerElement.node :
            this.getNodeOf(object)
    }
    
    /**
     * @param {Element|ElementAssembler|RoleAttrAssembler|*} object
     * @returns {RoleAttrAssembler|*|null}
     */
    static getRoleOf(object) {
        const instance = this.getInstanceOf(object)
        return instance instanceof RoleAttrAssembler?
            instance :
            instance && instance.role || null
    }

    /**
     * @see https://www.w3.org/TR/wai-aria-1.1/#isAbstract
     * @returns {boolean}
     * @abstract
     */
    static get abstract() {
        return true
    }

    /**
     * @returns {class}
     */
    static get attrAssembler() {
        return ARIAAttrAssembler
    }

    /**
     * @returns {string[]}
     */
    static get classList() {
        return this.roleList
    }

    /**
     * @returns {string}
     */
    static get defaultPropertyName() {
        return defaultPropertyName
    }

    /**
     * @returns {class} HTMLElementAssembler
     */
    static get elementAssembler() {
        return HTMLElementAssembler
    }

    /**
     * @returns {string}
     */
    static get localName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {string}
     */
    static get selector() {
        return this.abstract?
            `[${ ROLE_ATTR_NAME }]` :
            `[${ ROLE_ATTR_NAME }~=${ this.role }]`
    }

    /**
     * @returns {string}
     */
    static get role() {
        return this.name.replace(CLASS_PREFIX_RE, EMPTY_STRING).toLowerCase()
    }

    /**
     * @returns {string[]}
     */
    static get roleList() {
        const list = []
        let object = this
        do if(object.abstract === false) {
            list.push(object.role)
        }
        while((object = getPrototypeOf(object)) && ROLE_ATTR_NAME in object)
        return list
    }
}

Object.defineProperty(HTMLElementAssembler.prototype, 'role', {
    configurable : true,
    /**
     * @returns {RoleAttrAssembler}
     */
    get() {
        return this.getAttributeNode(RoleAttrAssembler)
    }
})
