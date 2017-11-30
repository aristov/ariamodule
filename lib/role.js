import { AttrAssembler } from 'dommodule'

const { getPrototypeOf } = Object

const ROLE_ATTR_NAME = 'role'
const ROLE_SEPARATOR = ' '

export class RoleAttrAssembler extends AttrAssembler {
    /**
     * @param {*} init
     */
    init(init) {
        if(init && init.constructor === Object && init.ownerElement) {
            this.ownerElement = init.ownerElement
        }
        else {
            const assembler = this.constructor.elementAssembler
            this.ownerElement = new assembler
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

    emit(...args) {
        this.ownerElement.emit(...args)
    }

    getAttribute(attr) {
        const result = this.ownerElement.getAttribute(attr)
        return result === null && typeof attr === 'function'?
            attr.value :
            result
    }

    on(...args) {
        this.ownerElement.on(...args)
    }

    setAttribute(...args) {
        this.ownerElement.setAttribute(...args)
    }

    un(...args) {
        this.ownerElement.un(...args)
    }

    set children(children) {
        this.ownerElement.children = children
    }

    get children() {
        return this.ownerElement.children
    }

    set classList(classList) {
        this.ownerElement.classList = classList
    }

    get classList() {
        return this.ownerElement.classList
    }

    set className(className) {
        this.ownerElement.className = className
    }

    get className() {
        return this.ownerElement.className
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
