import { AttrAssembler } from 'dommodule'

const EMPTY_STRING = ''
const ARIA_PREFIX = 'aria-'
const DEFAULT_ARIA_ATTR_NAME = 'roledescription'
const DEFAULT_BOOLEAN_VALUE = false
const DEFAULT_INTEGER_VALUE = 0
const DEFAULT_TOKEN_VALUE_TRUE = 'true'
const ID_REF_SEPARATOR = ','
const TOKEN_SEPARATOR = ' '
const TYPE_UNDEFINED = 'undefined'
const idMap = ({ id }) => id

export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get localName() {
        const name = this === ARIAAttrAssembler?
            DEFAULT_ARIA_ATTR_NAME :
            this.name.toLowerCase()
        return ARIA_PREFIX + name
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.localName
    }

    /**
     * @returns {String}
     */
    static get value() {
        return EMPTY_STRING
    }
}

export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {Boolean} value
     */
    set boolean(value) {
        this.value = String(Boolean(value))
    }

    /**
     * @returns {Boolean}
     */
    get boolean() {
        return this.value === DEFAULT_TOKEN_VALUE_TRUE
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
    set integer(value) {
        this.value = String(Number(value))
    }

    /**
     * @returns {Number}
     */
    get integer() {
        return Number(this.value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return DEFAULT_INTEGER_VALUE
    }
}

export class StringAttrType extends ARIAAttrAssembler {}

export class TokenAttrType extends ARIAAttrAssembler {
    set token(token) {
        this.value = token
    }

    get token() {
        return this.value
    }

    set value(value) {
        if(value && value !== TYPE_UNDEFINED) {
            super.value = value
        }
        else this.remove()
    }

    get value() {
        return super.value
    }
}

export class TokenListAttrType extends ARIAAttrAssembler {
    /**
     * @param {Array} value
     */
    set tokenList(value) {
        this.value = value.filter(Boolean).join(TOKEN_SEPARATOR)
    }

    /**
     * @returns {Array}
     */
    get tokenList() {
        const value = this.value
        return value? value.split(TOKEN_SEPARATOR) : null
    }
}

export class IDREFAttrType extends ARIAAttrAssembler {
    /**
     * @param {Element} element
     */
    set element(element) {
        this.value = element.id
    }

    /**
     * @returns {Element}
     */
    get element() {
        const value = this.value
        return value && this.node.ownerDocument.getElementById(value)
    }
}

export class IDREFListAttrType extends ARIAAttrAssembler {
    /**
     * @param {Array} elements
     */
    set elements(elements) {
        this.value = elements.map(idMap).join(ID_REF_SEPARATOR)
    }

    /**
     * @returns {Array}
     */
    get elements() {
        const doc = this.node.ownerDocument
        const handler = id => doc.getElementById(id)
        return this.value.split(ID_REF_SEPARATOR).map(handler)
    }
}
