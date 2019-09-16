import 'dommodule/lib/DocumentAssembler'
import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Role } from './Role'
import { ARIAAttrAssembler } from './ARIAAttrAssembler'

const { isArray } = Array
const { ELEMENT_NODE } = Node
const { generateId } = ElementAssembler
const IDREF_SEPARATOR = ' '

/**
 * A list of one or more ID references.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list
 * @abstract
 */
export class ARIATypeIDREFList extends ARIAAttrAssembler {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._refs = this.constructor.defaultValue
    }

    /**
     * @param {Role|ElementAssembler|Element|string|*} object
     * @returns {string}
     * @private
     */
    getObjectId(object) {
        if(object instanceof Role || object.nodeType === ELEMENT_NODE) {
            return object.id || (object.id = generateId.call(object.constructor))
        }
        return object
    }

    /**
     * @param {Role|ElementAssembler|Element|string|*} object
     * @returns {ElementAssembler|*}
     * @private
     */
    getObjectRef(object) {
        if(object instanceof Role || object.nodeType === ELEMENT_NODE) {
            return object.ownerElement || this.getInstanceOf(object)
        }
        return this.ownerDocument.getElementById(object)
    }


    /**
     * @param {*} value {Role|ElementAssembler|Element|string|array|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(isArray(value)) {
            const list = value.filter(Boolean)
            if(list.length) {
                this._refs = list.map(object => this.getObjectRef(object))
                this.node.value = list.map(this.getObjectId).join(IDREF_SEPARATOR)
            }
            else this.remove()
        }
        else {
            this._refs = [this.getObjectRef(value)]
            this.node.value = this.getObjectId(value)
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
                const element = this.ownerDocument.getElementById(id) || refs[i]
                return element && element.role || element
            }) :
            this.constructor.defaultValue
    }

    /**
     * @param {*} value
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || (isArray(value) && !value.length)
    }

    /**
     * @returns {array}
     */
    static get defaultValue() {
        return []
    }
}
