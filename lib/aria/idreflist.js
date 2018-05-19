import { ARIAAttrAssembler } from './aria'

const { isArray } = Array
const ID_ATTRIBUTE_NAME = 'id'
const ID_REF_SEPARATOR = ' '
const TYPE_OBJECT = 'object'

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
        else if(isArray(value)) {
            this.node.value = value.map(({ id }) => id).join(ID_REF_SEPARATOR)
        }
        else {
            this.node.value = typeof value === TYPE_OBJECT && ID_ATTRIBUTE_NAME in value?
                value.id :
                value
        }
    }

    /**
     * @returns {(RoleAttrAssembler|ElementAssembler|*)[]}
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
