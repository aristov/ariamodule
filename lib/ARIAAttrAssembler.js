import { AttrAssembler } from 'dommodule/lib/AttrAssembler'

const ARIA_CLASS_PREFIX_RE = /^ARIA/
const ARIA_ATTRIBUTE_PREFIX = 'aria-'
const EMPTY_STRING = ''

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_attrs
 * @see https://www.w3.org/TR/html/dom.html#state-and-property-attributes
 * @see http://www.w3.org/ns/wai-aria/
 * @abstract
 */
export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @see https://www.w3.org/TR/wai-aria-1.1/#state_property_processing
     * @param {*} value
     * @returns {boolean}
     * @override
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === EMPTY_STRING
    }

    /**
     * @returns {string}
     * @override
     */
    static get localName() {
        return this.name.replace(ARIA_CLASS_PREFIX_RE, ARIA_ATTRIBUTE_PREFIX).toLowerCase()
    }
}
