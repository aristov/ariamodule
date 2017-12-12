import { ARIAAttrAssembler } from './aria'

const TOKEN_FALSE = 'false'
const TOKEN_NONE = 'none'
const TOKEN_OFF = 'off'
const TOKEN_UNDEFINED = 'undefined'

export class TokenAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {String|*}
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
        return !value || value === TOKEN_UNDEFINED
    }
}

export class Autocomplete extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}

export class Checked extends TokenAttrType {}

export class Current extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}

export class Expanded extends TokenAttrType {}

export class Grabbed extends TokenAttrType {}

export class Invalid extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}

export class Live extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_OFF
    }
}

export class Orientation extends TokenAttrType {}

export class Selected extends TokenAttrType {}

export class Sort extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}
