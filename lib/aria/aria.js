import { AttrAssembler } from 'dommodule'

const ARIA_PREFIX = 'aria-'
const ARIA_NAMESPACE_URI = 'http://www.w3.org/ns/wai-aria/'
const ARIA_NAMESPACE_PREFIX = 'aria'
const DEFAULT_VALUE = ''

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_attrs
 * @see https://www.w3.org/TR/html/dom.html#state-and-property-attributes
 * @see http://www.w3.org/ns/wai-aria/
 */
export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get defaultValue() {
        return DEFAULT_VALUE
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return ARIA_PREFIX + this.name.toLowerCase()
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return document instanceof XMLDocument?
            ARIA_NAMESPACE_PREFIX :
            super.prefix
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return document instanceof XMLDocument?
            ARIA_NAMESPACE_URI :
            super.namespace
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.localName
    }
}
