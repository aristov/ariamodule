import { ARIAAttrAssembler } from './ARIAAttrAssembler'
import { AttrAssembler } from 'dommodule/lib/AttrAssembler'
import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { EventTargetAssembler } from 'dommodule/lib/EventTargetAssembler'

const { getPrototypeOf } = Object
const { Element, Node, document } = window
const { getTargetOf } = AttrAssembler
const { valuePropertyName, getNodeOf } = ElementAssembler
const EMPTY_STRING = ''
const OWNER_ELEMENT_PROPERTY_NAME = 'ownerElement'
const ROLE_ATTR_NAME = 'role'
const ROLE_CLASS_PREFIX_RE = /^Role/
const ROLE_SEPARATOR = ' '

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
export class Role extends AttrAssembler {
    /**
     * @param {{}} init
     * @override
     */
    create(init) {
        const constructor = this.constructor
        const { roleList } = constructor
        let node = init.node
        if(node && node.nodeType === Node.ELEMENT_NODE) {
            super.create({})
        }
        else {
            super.create(init)
            node = node?
                node.ownerElement :
                getNodeOf(init.ownerElement || new constructor.elementAssembler)
        }
        const role = getTargetOf(this)
        role.value = roleList.join(ROLE_SEPARATOR)
        node.attributes.setNamedItem(role)
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
     * @param {class|string} object
     * @returns {*|null}
     */
    closest(object) {
        return this.ownerElement.closest(object)
    }

    /**
     * @param {Role|ChildNodeAssembler|ChildNode|*} object
     * @returns {boolean}
     */
    contains(object) {
        const instance = object instanceof Role?
            object.ownerElement :
            this.getInstanceOf(object)
        return this.ownerElement.contains(instance)
    }

    /**
     * @param {string} type
     * @param {CustomEventInit|{}} [eventInitDict]
     * @returns {boolean}
     * @override
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
     * @param {class|string} attr
     * @returns {string|*|null}
     */
    getAttr(attr) {
        return this.ownerElement.getAttr(attr)
    }

    /**
     * @param {Element|ElementAssembler|Role|*} object
     * @returns {Role|*|null}
     */
    getRoleOf(object) {
        return this.constructor.getRoleOf(object)
    }

    /**
     * @param {class|string} attr
     * @returns {boolean}
     */
    hasAttr(attr) {
        return this.ownerElement.hasAttr(attr)
    }

    /**
     * @param {*} childNodes
     */
    prepend(...childNodes) {
        this.ownerElement.prepend(...childNodes)
    }

    /**
     * Remove the owner element from a tree
     * @override
     */
    remove() {
        this.ownerElement.remove()
    }

    /**
     * @param {class|string} attr
     */
    removeAttr(attr) {
        this.ownerElement.removeAttr(attr)
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
     * @param {{capture,once,passive,context}|boolean|EventTargetAssembler|*} [options]
     * @override
     */
    on(type, callback, options) {
        this.ownerElement.on(type, callback, getOptions.call(this, options))
    }

    /**
     * @param {class|string} attr
     * @param {*} value
     */
    setAttr(attr, value) {
        this.ownerElement.setAttr(attr, value)
    }

    /**
     * @param {string} name
     * @override
     */
    setPropertyFilter(name) {
        return name !== OWNER_ELEMENT_PROPERTY_NAME && super.setPropertyFilter(name)
    }

    /**
     * @param {string} name
     * @param {string} value
     * @override
     */
    setPropertyFallback(name, value) {
        this.ownerElement.setProperty(name, value)
    }

    /**
     * @param {string} type
     * @param {function} callback
     * @param {{capture,context}|boolean|EventTargetAssembler|*} [options]
     * @override
     */
    un(type, callback, options) {
        this.ownerElement.un(type, callback, getOptions.call(this, options))
    }

    /**
     * @param {*} children
     */
    set children(children) {
        this.ownerElement.children = children
    }

    /**
     * @returns {array.ElementAssembler|*}
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
     * @override
     */
    get name() {}

    /**
     * @returns {Element|*}
     * @override
     */
    get node() {
        return getTargetOf(this).ownerElement
    }

    /**
     * @returns {ElementAssembler|*}
     * @override
     */
    get ownerElement() {
        return this.getInstanceOf(this.node)
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
     * @param {*} previousSibling
     */
    set previousSibling(previousSibling) {
        this.ownerElement.previousSibling = previousSibling
    }

    /**
     * @returns {ElementAssembler|*}
     */
    get previousSibling() {
        return this.ownerElement.previousSibling
    }

    /**
     * @param {*} nextSibling
     */
    set nextSibling(nextSibling) {
        this.ownerElement.nextSibling = nextSibling
    }

    /**
     * @returns {ElementAssembler|*}
     */
    get nextSibling() {
        return this.ownerElement.nextSibling
    }

    /**
     * @param {*} firstChild
     */
    set firstChild(firstChild) {
        this.ownerElement.firstChild = firstChild
    }

    /**
     * @returns {ElementAssembler|*}
     */
    get firstChild() {
        return this.ownerElement.firstChild
    }

    /**
     * @param {*} lastChild
     */
    set lastChild(lastChild) {
        this.ownerElement.lastChild = lastChild
    }

    /**
     * @returns {ElementAssembler|*}
     */
    get lastChild() {
        return this.ownerElement.lastChild
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
     * @override
     * @param {string} value
     */
    set value(value) {
        this.textContent = value
    }

    /**
     * @override
     * @returns {string}
     */
    get value() {
        return this.textContent
    }

    /**
     * @param {{}} init
     * @override
     */
    static create(init) {
        if(this.abstract) {
            throw TypeError(`Could not create an abstract ${ this.name } instance`)
        }
        return document.createAttribute(this.localName)
    }

    /**
     * @param {Element|ElementAssembler|Role|*} object
     * @returns {Role|*|null}
     */
    static getRoleOf(object) {
        const instance = object && this.getAssemblerOf(object).getInstanceOf(object)
        return instance instanceof Role?
            instance :
            instance && instance.role || null
    }

    /**
     * @see https://www.w3.org/TR/wai-aria-1.1/#isAbstract
     * @returns {boolean}
     */
    static get abstract() {
        return true
    }

    /**
     * @returns {class}
     * @override
     */
    static get attrAssembler() {
        return ARIAAttrAssembler
    }

    /**
     * @returns {string}
     * @override
     */
    static get valuePropertyName() {
        return valuePropertyName
    }

    /**
     * @param {class|null} elementAssembler
     */
    static set elementAssembler(elementAssembler) {
        this._elementAssembler = elementAssembler
    }

    /**
     * @returns {class}
     * @override
     */
    static get elementAssembler() {
        const role = this.role
        return this._elementAssembler || class extends ElementAssembler {
            static get localName() {
                return role
            }
        }
    }

    /**
     * @returns {string}
     * @override
     */
    static get localName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {string}
     * @override
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
        return this.name.replace(ROLE_CLASS_PREFIX_RE, '')
    }

    /**
     * @returns {string[]}
     */
    static get roleList() {
        const list = []
        let object = this
        do if(object.abstract === false) {
            const role = object.role
            list.includes(role) || list.push(role)
        }
        while((object = getPrototypeOf(object)) && ROLE_ATTR_NAME in object)
        return list
    }
}

/**
 * @param {{capture,once,passive,context}|boolean|EventTargetAssembler|*} [options]
 * @returns {{capture,once,passive,context}|EventTargetAssembler|*}
 * @private
 */
function getOptions(options) {
    if(options) {
        if(typeof options === 'boolean') {
            return { capture : options, context : this }
        }
        else if(!(options instanceof EventTargetAssembler) && !options.context) {
            options.context = this
        }
        return options
    }
    return this
}

Object.defineProperty(Role, '_elementAssembler', {
    writable : true,
    value : null
})

Object.defineProperty(ElementAssembler.prototype, 'role', {
    configurable : true,
    /**
     * @returns {Role}
     */
    get() {
        return Role.getAttrOf(this)
    }
})
