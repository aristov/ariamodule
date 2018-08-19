import { Span } from 'htmlmodule/lib/span'
import { RoleType } from './roletype'

/**
 * @summary An interactive component of a graphical user interface (GUI).
 * @see https://www.w3.org/TR/wai-aria-1.1/#widget
 * @abstract
 */
export class Widget extends RoleType {
    /**
     * @param {{}} init
     * @param {string} [init.name]
     */
    assign(init) {
        if(init.hasOwnProperty('name')) {
            this.name = init.name
        }
        super.assign(init)
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.dataset.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.dataset.name
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Span
    }
}
