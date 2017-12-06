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
        if(value && value !== TOKEN_UNDEFINED) {
            super.value = value
        }
        else this.remove()
    }

    /**
     * @returns {String}
     */
    get value() {
        return super.value
    }

    /**
     * @returns {undefined}
     */
    static get value() {
        return undefined
    }
}

export class Autocomplete extends TokenAttrType {
    /**
     * @returns {String}
     */
    static get value() {
        return TOKEN_NONE
    }
}

export class Checked extends TokenAttrType {}

export class Current extends TokenAttrType {
    /**
     * @returns {String}
     */
    static get value() {
        return TOKEN_FALSE
    }
}

export class Expanded extends TokenAttrType {}

export class Grabbed extends TokenAttrType {}

export class Invalid extends TokenAttrType {
    /**
     * @returns {String}
     */
    static get value() {
        return TOKEN_FALSE
    }
}

export class Live extends TokenAttrType {
    /**
     * @returns {String}
     */
    static get value() {
        return TOKEN_OFF
    }
}

export class Orientation extends TokenAttrType {}

export class Selected extends TokenAttrType {}

export class Sort extends TokenAttrType {
    /**
     * @returns {String}
     */
    static get value() {
        return TOKEN_NONE
    }
}
