import { ARIAAttrAssembler } from './aria'

const ID_REF_SEPARATOR = ' '
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
        return super.value.split(ID_REF_SEPARATOR).map(id => {
            const element = id?
                this.ownerDocument.getElementById(id) :
                null
            return element && element.role || element
        })
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
