import { ElementAssembler } from 'dommodule/lib/element'
import { RoleAttrAssembler } from '../role'
import { ARIAAttrAssembler } from './aria'

const ID_REF_SEPARATOR = ' '
const { isArray } = Array
const { generateUniqueId } = ElementAssembler

/**
 * @param {RoleAttrAssembler|ElementAssembler|Element|string|*} object
 * @returns {string}
 * @private
 */
function getObjectId(object) {
    if(object instanceof RoleAttrAssembler
        || object instanceof ElementAssembler
        || object instanceof Element) {
        return object.id || (object.id = generateUniqueId(object))
    }
    return object
}

/**
 * @summary A list of one or more ID references.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list
 */
export class IDREFListAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {array|string|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(isArray(value)) {
            this.node.value = value.map(getObjectId).join(ID_REF_SEPARATOR)
        }
        else this.node.value = getObjectId(value)
    }

    /**
     * @returns {array}
     */
    get value() {
        const value = this.node.value
        return value?
            value.split(ID_REF_SEPARATOR).map(id => {
                const element = id?
                    this.getInstanceOf(document.getElementById(id)) :
                    null
                return element && element.role || element
            }) : []
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || (isArray(value) && !value.length)
    }

    /**
     * @returns {Array}
     */
    static get defaultValue() {
        return []
    }
}
