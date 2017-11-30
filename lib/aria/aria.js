import { AttrAssembler } from 'dommodule'

const ARIA_PREFIX = 'aria-'
const DEFAULT_ATTR_POSTFIX = 'roledescription'

export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get localName() {
        const postfix = this === ARIAAttrAssembler?
            DEFAULT_ATTR_POSTFIX :
            this.name.toLowerCase()
        return ARIA_PREFIX + postfix
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.localName
    }
}
