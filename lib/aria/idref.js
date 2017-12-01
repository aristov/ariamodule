import { ElementAssembler } from 'dommodule'
import { ARIAAttrAssembler } from './aria'

const { document } = window

export class IDREFAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {ElementAssembler|String}
     */
    set value(value) {
        if(value) {
            if('id' in value) this.value = value.id
            else super.value = value
        }
        else this.remove()
    }

    /**
     * @returns {ElementAssembler}
     */
    get value() {
        const value = super.value
        const doc = this.node.ownerDocument || document
        const node = value && doc.getElementById(value)
        return node && this.getInstance(node)
    }
}

export class ActiveDescendant extends IDREFAttrType {}

export class Details extends IDREFAttrType {}

export class ErrorMessage extends IDREFAttrType {}