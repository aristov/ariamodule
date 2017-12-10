import { ARIAAttrAssembler } from './aria'

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

export class ActiveDescendant extends IDREFAttrType {}

export class Details extends IDREFAttrType {}

export class ErrorMessage extends IDREFAttrType {}
