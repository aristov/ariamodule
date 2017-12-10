import { AttrAssembler, ElementAssembler } from 'dommodule'
import { ARIAAttrAssembler } from './aria/aria'

const { getPrototypeOf } = Object
const { prototype : { map } } = Array
const { document } = window

const ROLE_ATTR_NAME = 'role'
const ROLE_SEPARATOR = ' '
const UNIQUE_ID_MULTIPLIER = 1e10

/**
 * @param {*} object
 * @param {String} name
 * @returns {Boolean}
 */
function hasOwnProperty(object, name) {
    return Boolean(object)
        && object.constructor === Object
        && object.hasOwnProperty(name)
}

export class RoleAttrAssembler extends AttrAssembler {
    /**
     * @param {*} init
     */
    init(init) {
        this.className = this.node.value = this.constructor.role
        if(hasOwnProperty(init, 'ownerElement')) {
            this.ownerElement = init.ownerElement
        }
        if(init && init.constructor !== Object) {
            this.children = init
        }
        else super.init(init)
    }

    /**
     * @param {AttrAssembler} items
     */
    after(...items) {
        this.ownerElement.after(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {*} items
     */
    append(...items) {
        this.ownerElement.append(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {*} child
     */
    appendChild(child) {
        this.ownerElement.appendChild(child)
    }

    /**
     * @param {*} items
     */
    before(...items) {
        this.ownerElement.before(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {Function} assembler
     * @returns {ElementAssembler|AttrAssembler|null}
     */
    closest(assembler) {
        return this.ownerElement.closest(assembler)
    }

    /**
     * @param {NodeAssembler|Node} node
     * @returns {Boolean}
     */
    contains(node) {
        return this.ownerElement.contains(node)
    }

    /**
     * @param {*} args
     */
    emit(...args) {
        this.ownerElement.emit(...args)
    }

    /**
     * @param {Function} assembler
     * @param {String} [selectorPart]
     * @returns {RoleAttrAssembler|ElementAssembler|null|*}
     */
    find(assembler, selectorPart) {
        let selector = assembler.selector
        if(selectorPart) selector += selectorPart
        const node = this.ownerElement.node.querySelector(selector)
        if(node) {
            const element = this.getInstance(node)
            const isAttr = assembler === AttrAssembler
                || AttrAssembler.isPrototypeOf(assembler)
            return isAttr?
                element.getAttributeNode(assembler) :
                element
        }
        return null
    }

    /**
     * @param {Function} assembler
     * @param {String} [selectorPart]
     * @returns {(RoleAttrAssembler|ElementAssembler|*)[]}
     */
    findAll(assembler, selectorPart) {
        let selector = assembler.selector
        if(selectorPart) selector += selectorPart
        const collection = this.ownerElement.node.querySelectorAll(selector)
        const isAttr = assembler === AttrAssembler
            || AttrAssembler.isPrototypeOf(assembler)
        return map.call(collection, node => {
            const element = this.getInstance(node)
            return isAttr?
                element.getAttributeNode(assembler) :
                element
        })
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

    /**
     * @param {Function|String} attr
     */
    hasAttribute(attr) {
        return this.ownerElement.hasAttribute(attr)
    }

    /**
     * @param {*} items
     */
    prepend(...items) {
        this.ownerElement.prepend(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
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
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(value !== undefined) {
            if(name in this.constructor) void null
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
                else this._onMismatch(name, value)
            }
        }
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
     * @returns {Function}
     */
    static get attrAssembler() {
        return ARIAAttrAssembler
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
    static get role() {
        const list = []
        let role = this
        do if(role.abstract === false) {
            list.push(role.name)
        }
        while((role = getPrototypeOf(role)) && ROLE_ATTR_NAME in role)
        return list.join(ROLE_SEPARATOR).toLowerCase()
    }
}

Object.defineProperties(ElementAssembler.prototype, {
    appendChild : {
        configurable : true,
        writable : true,
        /**
         * @param {AttrAssembler|ChildNodeAssembler|Node|*} child
         */
        value(child) {
            if(child instanceof RoleAttrAssembler) {
                child.parentNode = this.node
            }
            else {
                const object = Object.getPrototypeOf(ElementAssembler)
                object.prototype.appendChild.call(this, child)
            }
        }
    },
    role : {
        configurable : true,
        /**
         * @returns {AttrAssembler}
         */
        get() {
            return this.getAttributeNode(RoleAttrAssembler)
        }
    }
})

Object.defineProperty(ElementAssembler, 'selector', {
    configurable : true,
    /**
     * @returns {String}
     */
    get() {
        return this.localName
    }
})
