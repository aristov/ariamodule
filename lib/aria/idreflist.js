import { ARIAAttrAssembler } from './aria'

const ID_REF_SEPARATOR = ' '
const idMap = ({ id }) => id

/**
 * @summary A list of one or more ID references.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list
 */
export class IDREFListAttrType extends ARIAAttrAssembler {
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
