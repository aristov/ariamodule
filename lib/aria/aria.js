import { AttrAssembler } from 'dommodule/lib/attr'

const ARIA_PREFIX = 'aria-'
const EMPTY_STRING = ''

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_attrs
 * @see https://www.w3.org/TR/html/dom.html#state-and-property-attributes
 * @see http://www.w3.org/ns/wai-aria/
 */
export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @see https://www.w3.org/TR/wai-aria-1.1/#state_property_processing
     * @param {*} value
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === EMPTY_STRING
    }

    /**
     * @returns {string}
     */
    static get localName() {
        return ARIA_PREFIX + this.name.toLowerCase()
    }
}
