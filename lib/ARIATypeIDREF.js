import 'dommodule/lib/DocumentAssembler'
import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Role } from './Role'
import { ARIAAttrAssembler } from './ARIAAttrAssembler'

const { ELEMENT_NODE } = Node
const { generateId } = ElementAssembler

/**
 * Reference to the ID of another element in the same document
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref
 * @abstract
 */
export class ARIATypeIDREF extends ARIAAttrAssembler {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this._ref = this.constructor.defaultValue
    }

    /**
     * @param {*} value {Role|ElementAssembler|Element|string}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(value instanceof Role || value.nodeType === ELEMENT_NODE) {
            this._ref = value.ownerElement || this.getInstanceOf(value)
            this.node.value = value.id || (value.id = generateId.call(value.constructor))
        }
        else {
            this._ref = this.ownerDocument.getElementById(value)
            this.node.value = value
        }
    }

    /**
     * @returns {Role|ElementAssembler|null}
     */
    get value() {
        const value = this.node.value
        if(value) {
            const element = this.ownerDocument.getElementById(value) || this._ref
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
