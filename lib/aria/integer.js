import { ARIAAttrAssembler } from './aria'

/**
 * @summary A numerical value without a fractional component.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_integer
 */
export class IntegerAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(this.node.value)
    }

    /**
     * @param {Number} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return isNaN(value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return NaN
    }
}
