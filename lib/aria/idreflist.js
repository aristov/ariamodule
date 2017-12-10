import { ARIAAttrAssembler } from './aria'

const ID_REF_SEPARATOR = ' '
const idMap = ({ id }) => id

export class IDREFListAttrType extends ARIAAttrAssembler {
    /*remove() {
        if(this.ownerElement) super.remove()
    }*/

    /**
     * @param {*} value {Array|String|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else {
            if(Array.isArray(value)) {
                this.node.value = value.map(idMap).join(ID_REF_SEPARATOR)
            }
            else {
                const isObject = typeof value === 'object'
                this.node.value = isObject && 'id' in value?
                    value.id :
                    value
            }
        }
    }

    /**
     * @returns {NodeAssembler[]}
     */
    get value() {
        const value = this.node.value
        return value?
            value.split(ID_REF_SEPARATOR).map(id => {
                const element = id?
                    this.ownerDocument.getElementById(id) :
                    null
                return element && element.role || element
            }) : []
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || (Array.isArray(value) && !value.length)
    }

    /**
     * @returns {Array}
     */
    static get defaultValue() {
        return []
    }
}

export class Controls extends IDREFListAttrType {}

export class DescribedBy extends IDREFListAttrType {}

export class FlowTo extends IDREFListAttrType {}

export class LabelledBy extends IDREFListAttrType {}

export class Owns extends IDREFListAttrType {}
