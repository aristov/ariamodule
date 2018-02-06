import { AttrAssembler } from 'dommodule'

const ARIA_PREFIX = 'aria-'
const DEFAULT_VALUE = ''

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
    static get qualifiedName() {
        return this.localName
    }
}
