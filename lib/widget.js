import { Span } from 'htmlmodule/lib/span'
import { RoleType } from './roletype'

const tabIndexKey = Symbol()

/**
 * @summary An interactive component of a graphical user interface (GUI).
 * @see https://www.w3.org/TR/wai-aria-1.1/#widget
 * @abstract
 */
export class Widget extends RoleType {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this[tabIndexKey] = null
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        if(super.disabled = disabled) {
            if(this.hasAttr('tabindex')) {
                this[tabIndexKey] = this.tabIndex
                this.removeAttr('tabindex')
            }
        }
        else {
            const tabIndex = this[tabIndexKey]
            if(tabIndex !== null) {
                this.tabIndex = tabIndex
            }
        }
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return super.disabled
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Span
    }
}
