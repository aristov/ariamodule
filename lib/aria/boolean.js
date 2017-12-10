import { ARIAAttrAssembler } from './aria'

const TOKEN_TRUE = 'true'

export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Boolean}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return this.node.value === TOKEN_TRUE
    }

    /**
     * @param {Boolean} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === false
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
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
