import { Span } from 'htmlmodule'
import { RoleAttrAssembler } from './role'
import {
    Atomic,
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
     * @param {Boolean} atomic
     */
    set atomic(atomic) {
        this.setAttribute(Atomic, atomic)
    }

    /**
     * @returns {Boolean}
     */
    get atomic() {
        return this.getAttribute(Atomic)
    }

    /**
     * @param {Boolean} busy
     */
    set busy(busy) {
        this.setAttribute(Busy, busy)
    }

    /**
     * @returns {Boolean}
     */
    get busy() {
        return this.getAttribute(Busy)
    }

    /**
     * @param {NodeAssembler[]|*} controls
     */
    set controls(controls) {
        this.setAttribute(Controls, controls)
    }

    /**
     * @returns {NodeAssembler[]|*}
     */
    get controls() {
        return this.getAttribute(Controls)
    }

    /**
     * @param {String} current
     */
    set current(current) {
        this.setAttribute(Current, current)
    }

    /**
     * @returns {String}
     */
    get current() {
        return this.getAttribute(Current)
    }

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
     * @param {String} dropEffect
     */
    set dropEffect(dropEffect) {
        this.setAttribute(DropEffect, dropEffect)
    }

    /**
     * @returns {String}
     */
    get dropEffect() {
        return this.getAttribute(DropEffect)
    }

    /**
     * @param {NodeAssembler|null} errorMessage
     */
    set errorMessage(errorMessage) {
        this.setAttribute(ErrorMessage, errorMessage)
    }

    /**
     * @returns {NodeAssembler|null}
     */
    get errorMessage() {
        return this.getAttribute(ErrorMessage)
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
     * @param {String} hasPopup
     */
    set hasPopup(hasPopup) {
        this.setAttribute(HasPopup, hasPopup)
    }

    /**
     * @returns {String}
     */
    get hasPopup() {
        return this.getAttribute(HasPopup)
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
     * @param {String} invalid
     */
    set invalid(invalid) {
        this.setAttribute(Invalid, invalid)
    }

    /**
     * @returns {String}
     */
    get invalid() {
        return this.getAttribute(Invalid)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.setAttribute(Label, label)
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.getAttribute(Label)
    }

    /**
     * @param {NodeAssembler[]} labelledBy {(NodeAssembler|Node|String)[]}
     */
    set labelledBy(labelledBy) {
        this.setAttribute(LabelledBy, labelledBy)
    }

    /**
     * @returns {NodeAssembler[]}
     */
    get labelledBy() {
        return this.getAttribute(LabelledBy)
    }

    /**
     * @param {String} live
     */
    set live(live) {
        this.setAttribute(Live, live)
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.getAttribute(Live)
    }

    /**
     * @param {NodeAssembler[]|*} owns
     */
    set owns(owns) {
        this.setAttribute(Owns, owns)
    }

    /**
     * @returns {NodeAssembler[]|*}
     */
    get owns() {
        return this.getAttribute(Owns)
    }

    /**
     * @param {String[]} relevant
     */
    set relevant(relevant) {
        this.setAttribute(Relevant, relevant)
    }

    /**
     * @returns {String[]}
     */
    get relevant() {
        return this.getAttribute(Relevant)
    }

    /**
     * @param {String} roleDescription
     */
    set roleDescription(roleDescription) {
        this.setAttribute(RoleDescription, roleDescription)
    }

    /**
     * @returns {String}
     */
    get roleDescription() {
        return this.getAttribute(RoleDescription)
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Span
    }
}
