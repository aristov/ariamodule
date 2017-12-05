import { Span } from 'htmlmodule'
import { RoleAttrAssembler } from './role'
import {
    Busy,
    Controls,
    Current,
    Disabled,
    DropEffect,
    ErrorMessage,
    Grabbed,
    HasPopup,
    Hidden,
    Invalid,
    Label,
    LabelledBy,
    Live,
    Owns,
    Relevant,
    RoleDescription
} from './aria'

export class RoleType extends RoleAttrAssembler {
    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.setAttribute(Disabled, disabled)
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.getAttribute(Disabled)
    }
    /**
     * @param {Boolean} dropEffect
     */
    set dropEffect(dropEffect) {
        this.setAttribute(DropEffect, dropEffect)
    }

    /**
     * @returns {Boolean}
     */
    get dropEffect() {
        return this.getAttribute(DropEffect)
    }

    /**
     * @param {String} grabbed
     */
    set grabbed(grabbed) {
        this.setAttribute(Grabbed, grabbed)
    }

    /**
     * @returns {String}
     */
    get grabbed() {
        return this.getAttribute(Grabbed)
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        this.setAttribute(Hidden, hidden)
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return this.getAttribute(Hidden)
    }

    /**
     * @param {(NodeAssembler)[]} labelledBy {(NodeAssembler|Node|String)[]}
     */
    set labelledBy(labelledBy) {
        this.setAttribute(LabelledBy, labelledBy)
    }

    /**
     * @returns {(NodeAssembler)[]}
     */
    get labelledBy() {
        return this.getAttribute(LabelledBy)
    }

    /**
     * @param {RoleAttrAssembler[]|*} owns
     */
    set owns(owns) {
        this.setAttribute(Owns, owns)
    }

    /**
     * @returns {RoleAttrAssembler[]|*}
     */
    get owns() {
        return this.getAttribute(Owns)
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Span
    }
}

RoleType.defineAttributes([
    Busy,
    Controls,
    Current,
    // Disabled,
    // DropEffect,
    ErrorMessage,
    // Grabbed,
    HasPopup,
    // Hidden,
    Invalid,
    Label,
    // LabelledBy,
    Live,
    // Owns,
    Relevant,
    RoleDescription
])
