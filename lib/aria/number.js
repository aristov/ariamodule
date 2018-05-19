import { ARIAAttrAssembler } from './aria'

/**
 * @summary Any real numerical value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_number
 */
export class NumberAttrType extends ARIAAttrAssembler {
    /**
     * @param {Number|null} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Number|null}
     */
    get value() {
        const value = this.node.value
        return value? Number(value) : null
    }
}
