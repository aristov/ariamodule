import { ElementAssembler } from 'dommodule/lib/element'
import { RoleAttrAssembler } from '../role'
import { ARIAAttrAssembler } from './aria'

const { generateId } = ElementAssembler

/**
 * @summary Reference to the ID of another element in the same document
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref
 */
export class IDREFAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._ref = this.constructor.defaultValue
        super.init(init)
    }

    /**
     * @param {*} value {RoleAttrAssembler|ElementAssembler|Element|string}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(value instanceof RoleAttrAssembler
            || value instanceof ElementAssembler
            || value instanceof Element) {
            this._ref = value.ownerElement || this.getInstanceOf(value)
            this.node.value = value.id || (value.id = generateId.call(value.constructor))
        }
        else {
            this._ref = this.getInstanceOf(document.getElementById(value))
            this.node.value = value
        }
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|null}
     */
    get value() {
        const value = this.node.value
        if(value) {
            const element = this.getInstanceOf(document.getElementById(value)) || this._ref
            return element && element.role || element
        }
        return this.constructor.defaultValue
    }

    /**
     * @returns {null}
     */
    static get defaultValue() {
        return null
    }
}
