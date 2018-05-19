import { ARIAAttrAssembler } from './aria'

/**
 * @summary A numerical value without a fractional component.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_integer
 */
export class IntegerAttrType extends ARIAAttrAssembler {
    /**
     * @param {Number|null} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(Math.floor(value))
    }

    /**
     * @returns {Number|null}
     */
    get value() {
        const value = this.node.value
        return value? Math.floor(Number(value)) : null
    }
}
