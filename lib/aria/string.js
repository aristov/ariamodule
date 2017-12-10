import { ARIAAttrAssembler } from './aria'

export class StringAttrType extends ARIAAttrAssembler {
    /**
     * @param {String} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === this.defaultValue
    }
}

export class KeyShortCuts extends StringAttrType {}

export class Label extends StringAttrType {}

export class Placeholder extends StringAttrType {}

export class RoleDescription extends StringAttrType {}

export class ValueText extends StringAttrType {}
