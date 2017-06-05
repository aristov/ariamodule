import { AttrAssembler, TOKEN_SEPARATOR } from 'dommodule'

const EMPTY_STRING = ''
const ROLE_ATTR_NAME = 'role'
const ARIA_PREFIX = 'aria-'
const DEFAULT_ARIA_ATTR_NAME = 'roledescription'
const DEFAULT_BOOLEAN_VALUE = false
const DEFAULT_INTEGER_VALUE = 0
const DEFAULT_TOKEN_VALUE_TRUE = 'true'
const ID_REF_SEPARATOR = ','
const CLASS_ATTR_NAME = 'class'
const CLASS_NAME_SEPARATOR = ' '
const ROLE_SEPARATOR = ' '
const idMap = ({ id }) => id

const getPrototypeOf = Object.getPrototypeOf

export class ClassNameAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get value() {
        let classType = this
        let className = classType.name
        while((classType = getPrototypeOf(classType))) {
            if(classType === ClassNameAssembler) break
            className += CLASS_NAME_SEPARATOR + classType.name
        }
        return className
    }

    /**
     * @returns {string}
     */
    static get qualifiedName() {
        return CLASS_ATTR_NAME
    }
}

export class RoleAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get value() {
        let roleType = this
        let role = EMPTY_STRING
        do if(roleType.abstract === false) role += ROLE_SEPARATOR + roleType.name
        while((roleType = getPrototypeOf(roleType)) && ROLE_ATTR_NAME in roleType)
        return role.toLowerCase()
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
    static get qualifiedName() {
        return ROLE_ATTR_NAME
    }
}

export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @returns {Document}
     */
    get document() {
        return this.node.ownerDocument
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        const name = this === ARIAAttrAssembler?
            DEFAULT_ARIA_ATTR_NAME :
            this.name.toLowerCase()
        return ARIA_PREFIX + name
    }

    /**
     * @returns {String}
     */
    static get defaultValue() {
        return EMPTY_STRING
    }
}

export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {Boolean} value
     */
    set value(value) {
        super.value = String(Boolean(value))
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return super.value === DEFAULT_TOKEN_VALUE_TRUE
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return DEFAULT_BOOLEAN_VALUE
    }
}

export class IntegerAttrType extends ARIAAttrAssembler {
    /**
     * @param {Number} value
     */
    set value(value) {
        super.value = String(Number(value))
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(super.value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return DEFAULT_INTEGER_VALUE
    }
}

export class StringAttrType extends ARIAAttrAssembler {}

export class TokenAttrType extends ARIAAttrAssembler {}

export class TokenListAttrType extends ARIAAttrAssembler {
    /**
     * @param {Array} value
     */
    set value(value) {
        super.value = value.filter(Boolean).join(TOKEN_SEPARATOR)
    }

    /**
     * @returns {Array}
     */
    get value() {
        const value = super.value
        return value? value.split(TOKEN_SEPARATOR) : null
    }
}

export class IDREFAttrType extends ARIAAttrAssembler {
    /**
     * @param {Element} value
     */
    set value(value) {
        super.value = value.id
    }

    /**
     * @returns {Element}
     */
    get value() {
        const value = super.value
        return value && this.node.ownerDocument.getElementById(value)
    }
}

export class IDREFListAttrType extends ARIAAttrAssembler {
    /**
     * @param {Array} value
     */
    set value(value) {
        super.value = value.map(idMap).join(ID_REF_SEPARATOR)
    }

    /**
     * @returns {Array}
     */
    get value() {
        const doc = this.node.ownerDocument
        const handler = id => doc.getElementById(id)
        return this.value.split(ID_REF_SEPARATOR).map(handler)
    }
}
