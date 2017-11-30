import { ARIAAttrAssembler } from './aria'

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
