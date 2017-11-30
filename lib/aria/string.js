import { ARIAAttrAssembler } from './aria'

const EMPTY_STRING = ''

export class StringAttrType extends ARIAAttrAssembler {
    /**
     * @param {String} value
     */
    set value(value) {
        if(value) super.value = value
        else this.remove()
    }

    /**
     * @returns {String}
     */
    get value() {
        return super.value
    }

    /**
     * @returns {String}
     */
    static get value() {
        return EMPTY_STRING
    }
}

export class KeyShortCuts extends StringAttrType {}

export class Label extends StringAttrType {}

export class Placeholder extends StringAttrType {}

export class RoleDescription extends StringAttrType {}

export class ValueText extends StringAttrType {}
