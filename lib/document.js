import { Div } from 'htmlmodule'
import { Structure } from './structure'
import { Expanded } from './aria'

export class ARIADocument extends Structure {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(Expanded)
    }

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
        return ROLE_TYPE
    }
}

/**
 * @param {*} [init]
 * @returns {ARIADocument}
 */
export function document(...init) {
    return new ARIADocument(...init)
}

const ROLE_TYPE = document.name
