import { ARIAAttrAssembler } from './aria'

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
        else if(typeof value === 'string') {
            super.value = value
        }
        else if('id' in value) {
            super.value = value.id
        }
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|null}
     */
    get value() {
        const value = super.value
        const element = value?
            this.ownerDocument.getElementById(value) :
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
