import { ARIAAttrAssembler } from './aria'

const ID_ATTRIBUTE_NAME = 'id'
const TYPE_OBJECT = 'object'

/**
 * @summary Reference to the ID of another element in the same document
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref
 */
export class IDREFAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {ElementAssembler|RoleAttrAssembler|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else {
            this.node.value = typeof value === TYPE_OBJECT && ID_ATTRIBUTE_NAME in value?
                value.id :
                value
        }
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|null}
     */
    get value() {
        const value = this.node.value
        const element = value?
            this.getInstanceOf(document.getElementById(value)) :
            null
        return element && element.role || element
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return null
    }
}
