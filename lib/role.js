import { AttrAssembler } from 'dommodule/lib/attr'
import { ElementAssembler } from 'dommodule/lib/element'
import { ARIAAttrAssembler } from './aria/aria'

let undefined
const { getPrototypeOf } = Object
const { document } = window

const CLASS_PREFIX_RE = /^ARIA/
const EMPTY_STRING = ''
const ROLE_ATTR_NAME = 'role'
const ROLE_SEPARATOR = ' '
const UNIQUE_ID_MULTIPLIER = 1e10

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
        if(init && init.constructor === Object && init.hasOwnProperty('ownerElement')) {
            this.ownerElement = init.ownerElement
        }
    }

    /**
     * @param {*} [init]
     */
    assign(init) {
        if(!init.hasOwnProperty('className')) {
            this.className = this.node.value
        }
        super.assign(init)
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
     * @param {*} child
     * fixme
     */
    appendChild(child) {
        this.ownerElement.appendChild(child)
    }

    /**
     * @param {*} siblings
     */
    before(...siblings) {
        this.ownerElement.before(...siblings)
    }

    /**
     * @param {Function|String} object
     * @returns {*|null}
     */
    closest(object) {
        return this.ownerElement.closest(object)
    }

    /**
     * @param {ChildNodeAssembler|Node|*} object
     * @returns {Boolean}
     */
    contains(object) {
        return this.ownerElement.contains(object)
    }

    /**
     * @param {String} type
     * @param {CustomEventInit|{}} [eventInitDict]
     */
    emit(type, eventInitDict) {
        this.ownerElement.emit(type, eventInitDict)
    }

    /**
     * @param {Function|String|*} subject
     * @param {Function|String} [filter]
     * @returns {ChildNodeAssembler|*|null}
     */
    find(subject, filter) {
        return this.ownerElement.find(subject, filter)
    }

    /**
     * @param {Function|String|*} subject
     * @param {Function|String} [filter]
     * @returns {Array}
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
     * Generate unique identifier among the document
     * @returns {String}
     */
    generateUniqueId() {
        const doc = this.node.ownerDocument || document
        let id
        do id = this.constructor.generateId()
        while(doc.getElementById(id))
        return id
    }

    /**
     * @param {*} attr
     * @returns {*}
     * todo move this logic to dommodule
     */
    getAttribute(attr) {
        const instance = this.ownerElement.getAttributeNode(attr)
        if(instance) return instance.value
        else {
            return typeof attr === 'function'?
                attr.defaultValue :
                this.constructor.attrAssembler.defaultValue
        }
    }

    getElementOf() {
        // todo
    }

    /**
     * @param {Node|NodeAssembler|*} target
     * @returns {RoleAttrAssembler|null|*}
     */
    getRoleOf(target) {
        const instance = this.getInstanceOf(target)
        return instance instanceof RoleAttrAssembler?
            instance :
            instance && instance.role || null
    }

    /**
     * @param {Function|String} attr
     * @returns {Boolean}
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
     * Remove the onwer element from a tree
     */
    remove() {
        this.ownerElement.remove()
    }

    /**
     * @param {Function|String} attr
     */
    removeAttribute(attr) {
        this.ownerElement.removeAttribute(attr)
    }

    /**
     * @param {String} type
     * @param {Function} callback
     * @param {Object} [capture]
     */
    on(type, callback, capture) {
        this.ownerElement.on(type, callback, capture)
    }

    /**
     * @param {Function|String} attr
     * @param {*} value
     */
    setAttribute(attr, value) {
        this.ownerElement.setAttribute(attr, value)
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(value !== undefined) {
            if(name === 'name') this.name = value
            else if(name in this.constructor || name === 'ownerElement') {
                void null
            }
            else if(name in this) {
                this[name] = value
            }
            else {
                const ownerElement = this.ownerElement
                if(name in ownerElement) {
                    ownerElement[name] = value
                }
                else if(name in ownerElement.node) {
                    ownerElement.node[name] = value
                }
                else this.setPropertyMismatch(name)
            }
        }
    }

    /**
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} [capture]
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
     * @param {String} className
     */
    set className(className) {
        this.ownerElement.className = className
    }

    /**
     * @returns {String}
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
     * @returns {Number}
     */
    get elementIndex() {
        return this.ownerElement.elementIndex
    }

    /**
     * @param {String} id
     */
    set id(id) {
        this.ownerElement.id = id
    }

    /**
     * @return {String}
     */
    get id() {
        return this.ownerElement.id || (this.id = this.generateUniqueId())
    }

    /**
     * @param {String} name
     * fixme
     */
    set name(name) {
        this.dataset.name = name
    }

    /**
     * @returns {String}
     * fixme
     */
    get name() {
        return this.dataset.name
    }

    /**
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        return super.ownerElement || (this.ownerElement = new this.constructor.elementAssembler)
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

    get parentRole() {
        // todo
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
     * @param {Number} tabIndex
     */
    set tabIndex(tabIndex) {
        this.ownerElement.tabIndex = tabIndex
    }

    /**
     * @returns {Number}
     */
    get tabIndex() {
        return this.ownerElement.tabIndex
    }

    /**
     * @param {String} textContent
     */
    set textContent(textContent) {
        this.ownerElement.textContent = textContent
    }

    /**
     * @returns {String}
     */
    get textContent() {
        return this.ownerElement.textContent
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
     * @returns {String}
     */
    static generateId() {
        return this.name + Math.floor(Math.random() * UNIQUE_ID_MULTIPLIER)
    }

    static getRoleOf(object) {
        // todo
    }

    /**
     * @see https://www.w3.org/TR/wai-aria-1.1/#isAbstract
     * @returns {Boolean}
     */
    static get abstract() {
        return true
    }

    /**
     * @returns {Function}
     */
    static get attrAssembler() {
        return ARIAAttrAssembler
    }

    /**
     * @returns {String}
     */
    static get defaultPropertyName() {
        return ElementAssembler.defaultPropertyName
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {String}
     */
    static get selector() {
        return this.abstract?
            `[${ ROLE_ATTR_NAME }]` :
            `[${ ROLE_ATTR_NAME }~=${ this.role }]`
    }

    /**
     * @returns {String}
     */
    static get role() {
        return this.name.replace(CLASS_PREFIX_RE, EMPTY_STRING).toLowerCase()
    }

    /**
     * @returns {String[]}
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

Object.defineProperty(ElementAssembler.prototype, 'role', {
    configurable : true,
    /**
     * @returns {RoleAttrAssembler}
     */
    get() {
        return this.getAttributeNode(RoleAttrAssembler)
    }
})
