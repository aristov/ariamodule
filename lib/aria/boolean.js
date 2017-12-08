import { ARIAAttrAssembler } from './aria'

const TOKEN_TRUE = 'true'
const TOKEN_FALSE = 'false'

export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Boolean|String}
     */
    set value(value) {
        if(value && value !== TOKEN_FALSE) {
            super.value = String(value)
        }
        else /*if(this.ownerElement)*/ this.remove()
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return super.value === TOKEN_TRUE
    }

    /**
     * @returns {Boolean}
     */
    static get value() {
        return false
    }
}

export class Atomic extends BooleanAttrType {}

export class Busy extends BooleanAttrType {}

export class HasPopup extends BooleanAttrType {}

export class Hidden extends BooleanAttrType {}

export class Modal extends BooleanAttrType {}

export class Multiline extends BooleanAttrType {}

export class Multiselectable extends BooleanAttrType {}

export class ReadOnly extends BooleanAttrType {}

export class Required extends BooleanAttrType {}
