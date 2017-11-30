import { AttrAssembler } from 'dommodule'

const ARIA_PREFIX = 'aria-'
const DEFAULT_ATTR_POSTFIX = 'roledescription'
const ID_REF_SEPARATOR = ','
const idMap = ({ id }) => id

export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get localName() {
        const postfix = this === ARIAAttrAssembler?
            DEFAULT_ATTR_POSTFIX :
            this.name.toLowerCase()
        return ARIA_PREFIX + postfix
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.localName
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
