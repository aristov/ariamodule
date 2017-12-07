import { Div } from 'htmlmodule'
import { Structure } from './structure'

const ROLE_ATTR_VALUE = 'document'

export class ARIADocument extends Structure {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Div
    }

    /**
     * @returns {String}
     */
    static get role() {
        return ROLE_ATTR_VALUE
    }
}
