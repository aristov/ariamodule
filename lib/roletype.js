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
    DropEffect,
    ErrorMessage,
    Grabbed,
    HasPopup,
    // Hidden,
    Invalid,
    Label,
    // LabelledBy,
    Live,
    Owns,
    Relevant,
    RoleDescription
])
