import { Role } from './Role'
import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Span } from 'htmlmodule/lib/Span'
import { RoleType } from './RoleType'

let undefined
const tabIndexKey = Symbol()

/**
 * @summary An interactive component of a graphical user interface (GUI).
 * @see https://www.w3.org/TR/wai-aria-1.1/#widget
 * @abstract
 */
export class Widget extends RoleType {
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
            if(tabIndex !== undefined) {
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
     * @param {*} label {string|ElementAssembler|*}
     */
    set label(label) {
        if(label instanceof ElementAssembler) {
            this.prepend(this.labelledBy = label)
        }
        else super.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return super.label
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Span
    }
}

Role.Widget = Widget
