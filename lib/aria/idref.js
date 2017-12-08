import { ARIAAttrAssembler } from './aria'

export class IDREFAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {ElementAssembler|RoleAttrAssembler|String}
     */
    set value(value) {
        if(value) {
            if(typeof value === 'string') {
                super.value = value
            }
            else if('id' in value) {
                this.value = value.id
            }
        }
        else this.remove()
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
}

export class ActiveDescendant extends IDREFAttrType {}

export class Details extends IDREFAttrType {}

export class ErrorMessage extends IDREFAttrType {}
