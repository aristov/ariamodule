import { ElementAssembler } from 'dommodule/lib/element'
import { RoleAttrAssembler } from '../role'
import { ARIAAttrAssembler } from './aria'

const { isArray } = Array
const { generateId } = ElementAssembler
const IDREF_SEPARATOR = ' '

/**
 * @param {RoleAttrAssembler|ElementAssembler|Element|string|*} object
 * @returns {string}
 * @private
 */
function getObjectId(object) {
    if(object instanceof RoleAttrAssembler
        || object instanceof ElementAssembler
        || object instanceof Element) {
        return object.id || (object.id = generateId(object))
    }
    return object
}
/**
 * @param {RoleAttrAssembler|ElementAssembler|Element|string|*} object
 * @returns {ElementAssembler|*}
 * @private
 */
function getObjectRef(object) {
    if(object instanceof RoleAttrAssembler
        || object instanceof ElementAssembler
        || object instanceof Element) {
        return object.ownerElement || ElementAssembler.getInstanceOf(object)
    }
    return ElementAssembler.getInstanceOf(document.getElementById(object))
}

/**
 * @summary A list of one or more ID references.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list
 */
export class IDREFListAttrType extends ARIAAttrAssembler {
    init(init) {
        this._refs = this.constructor.defaultValue
        super.init(init)
    }

    /**
     * @param {*} value {RoleAttrAssembler|ElementAssembler|Element|string|array|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(isArray(value)) {
            this._refs = value.map(getObjectRef)
            this.node.value = value.map(getObjectId).join(IDREF_SEPARATOR)
        }
        else {
            this._refs = [getObjectRef(value)]
            this.node.value = getObjectId(value)
        }
    }

    /**
     * @returns {array.ElementAssembler|*}
     */
    get value() {
        const value = this.node.value
        const refs = this._refs
        return value?
            value.split(IDREF_SEPARATOR).map((id, i) => {
                const element = this.getInstanceOf(document.getElementById(id)) || refs[i]
                return element && element.role || element
            }) :
            this.constructor.defaultValue
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
