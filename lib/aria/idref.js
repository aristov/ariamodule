import { ElementAssembler } from 'dommodule/lib/element'
import { RoleAttrAssembler } from '../role'
import { ARIAAttrAssembler } from './aria'
import { Id } from './id'

const { generateUniqueId } = ElementAssembler

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
            if(value instanceof RoleAttrAssembler
                || value instanceof ElementAssembler
                || value instanceof Element) {
                this.node.value = value.id || (value.id = new Id).value
            }
            else this.node.value = value
        }
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|null}
     */
    get value() {
        const value = this.node.value
        if(value) {
            const id = Id.registry[value]
            const element = id?
                id.ownerElement :
                this.getInstanceOf(document.getElementById(value))
            return element && element.role || element
        }
        return null
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
