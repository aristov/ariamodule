import { ARIAAttrAssembler } from './aria'

const ID_REF_SEPARATOR = ','
const idMap = ({ id }) => id

export class IDREFListAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Array|String|*}
     */
    set value(value) {
        if(Array.isArray(value)) {
            value = value.map(idMap).join(ID_REF_SEPARATOR)
        }
        if(value) {
            const isObject = typeof value === 'object'
            super.value = isObject && 'id' in value?
                value.id :
                value
        }
        else this.remove()
    }

    /**
     * @returns {Array}
     */
    get value() {
        const doc = this.node.ownerDocument || document
        const handler = id => {
            const node = id? doc.getElementById(id) : null
            return node && this.getInstance(node.attributes.role)
        }
        return super.value.split(ID_REF_SEPARATOR).map(handler)
    }

    /**
     * @returns {Array}
     */
    static get value() {
        return []
    }
}

export class Controls extends IDREFListAttrType {}

export class DescribedBy extends IDREFListAttrType {}

export class FlowTo extends IDREFListAttrType {}

export class LabelledBy extends IDREFListAttrType {}

export class Owns extends IDREFListAttrType {}
