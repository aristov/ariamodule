import { AttrAssembler, ElementAssembler } from 'dommodule'

const { getPrototypeOf } = Object
const { document } = window

const ROLE_ATTR_NAME = 'role'
const ROLE_SEPARATOR = ' '
const UNIQUE_ID_MULTIPLIER = 1e10

export class RoleAttrAssembler extends AttrAssembler {
    /**
     * @param {*} init
     */
    init(init) {
        if(init && init.constructor === Object && init.ownerElement) {
            this.ownerElement = init.ownerElement
        }
        if(init && init.constructor !== Object) {
            this.children = init
            super.init()
        }
        else super.init(init)
        if(!init || init.constructor !== Object || !('className' in init)) {
            this.ownerElement.className = this.value
        }
    }

    /**
     * @param {*} args
     */
    append(...args) {
        this.ownerElement.append(...args)
    }

    /**
     * @param {*} child
     */
    appendChild(child) {
        this.ownerElement.appendChild(child)
    }

    /**
     * @param {*} args
     */
    emit(...args) {
        this.ownerElement.emit(...args)
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
     */
    getAttribute(attr) {
        const instance = this.ownerElement.getAttributeNode(attr)
        if(instance) return instance.value
        else {
            return typeof attr === 'function'?
                attr.value :
                AttrAssembler.value
        }
    }

    /**
     * @param {Function|String} attr
     */
    hasAttribute(attr) {
        return this.ownerElement.hasAttribute(attr)
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
     * @param {*} child
     */
    removeChild(child) {
        this.ownerElement.removeChild(child)
    }

    /**
     * @param {*} args
     */
    on(...args) {
        this.ownerElement.on(...args)
    }

    /**
     * @param {Function|String} attr
     * @param {*} value
     */
    setAttribute(attr, value) {
        this.ownerElement.setAttribute(attr, value)
    }

    /**
     * @param {*} args
     */
    un(...args) {
        this.ownerElement.un(...args)
    }

    /**
     * @param {*} childNodes
     */
    set childNodes(childNodes) {
        this.ownerElement.childNodes = childNodes
    }

    /**
     * @returns {(ChildNodeAssembler)[]}
     */
    get childNodes() {
        return this.ownerElement.childNodes
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
     * @returns {DOMStringMap}
     */
    get dataset() {
        return this.ownerElement.dataset
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
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        const ownerElement = super.ownerElement
        if(ownerElement) return ownerElement
        else {
            const { elementAssembler } = this.constructor
            return this.ownerElement = new elementAssembler
        }
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        this.ownerElement.parentNode = parentNode
    }

    /**
     * @returns {Node}
     */
    get parentNode() {
        return this.ownerElement.parentNode
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
     * @param {ARIAAttrAssembler} attr
     */
    static defineAttribute(attr) {
        const name = attr.name
        const propertyName = name.charAt(0).toLowerCase() + name.substr(1)
        Object.defineProperty(this.prototype, propertyName, {
            configurable : true,
            set(value) {
                this.setAttribute(attr, value)
            },
            get() {
                return this.getAttribute(attr)
            }
        })
    }

    /**
     * @param {(ARIAAttrAssembler)[]} attrs
     */
    static defineAttributes(attrs) {
        attrs.forEach(attr => this.defineAttribute(attr))
    }

    /**
     * @returns {String}
     */
    static generateId() {
        return this.name + Math.floor(Math.random() * UNIQUE_ID_MULTIPLIER)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return true
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
        return `[role~=${ this.name.toLowerCase() }]`
    }

    /**
     * @returns {String}
     */
    static get value() {
        const list = []
        let role = this
        do if(role.abstract === false) {
            list.push(role.name)
        }
        while((role = getPrototypeOf(role)) && ROLE_ATTR_NAME in role)
        return list.join(ROLE_SEPARATOR).toLowerCase()
    }
}

Object.defineProperty(ElementAssembler.prototype, 'appendChild', {
    /**
     * @param {AttrAssembler|ChildNodeAssembler|Node|*} child
     */
    value : function(child) {
        if(child instanceof RoleAttrAssembler) {
            child.parentNode = this.node
        }
        else {
            const object = Object.getPrototypeOf(ElementAssembler)
            object.prototype.appendChild.call(this, child)
        }
    },
    configurable : true,
    writable : true
})
