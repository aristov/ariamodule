import { ARIAAttrAssembler } from './aria'

export class NumberAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(isNaN(value)) this.remove()
        else super.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(super.value)
    }

    /**
     * @returns {Number}
     */
    static get value() {
        return NaN
    }
}

export class ValueMax extends NumberAttrType {}

export class ValueMin extends NumberAttrType {}

export class ValueNow extends NumberAttrType {}