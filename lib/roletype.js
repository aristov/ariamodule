import { RoleAttrAssembler } from './role'
import { Atomic } from './aria/atomic'
import { Busy } from './aria/busy'
import { Controls } from './aria/controls'
import { Current } from './aria/current'
import { Disabled } from './aria/disabled'
import { DropEffect } from './aria/dropeffect'
import { ErrorMessage } from './aria/errormessage'
import { Grabbed } from './aria/grabbed'
import { HasPopup } from './aria/haspopup'
import { Hidden } from './aria/hidden'
import { Invalid } from './aria/invalid'
import { KeyShortCuts } from './aria/keyshortcuts'
import { Label } from './aria/label'
import { LabelledBy } from './aria/labelledby'
import { Live } from './aria/live'
import { Owns } from './aria/owns'
import { Relevant } from './aria/relevant'
import { RoleDescription } from './aria/roledescription'

/**
 * @summary The base role from which all other roles in this taxonomy inherit.
 * @see https://www.w3.org/TR/wai-aria-1.1/#roletype
 * @abstract
 */
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
     * @param {*} controls
     */
    set controls(controls) {
        this.setAttribute(Controls, controls)
    }

    /**
     * @returns {*[]}
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
     * @param {ElementAssembler|RoleAttrAssembler|*|null} errorMessage
     */
    set errorMessage(errorMessage) {
        this.setAttribute(ErrorMessage, errorMessage)
    }

    /**
     * @returns {*} {NodeAssembler|null}
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
     * @param {String} keyShortCuts
     */
    set keyShortCuts(keyShortCuts) {
        this.setAttribute(KeyShortCuts, keyShortCuts)
    }

    /**
     * @returns {String}
     */
    get keyShortCuts() {
        return this.getAttribute(KeyShortCuts)
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
     * @param {*} labelledBy {(NodeAssembler|Node|String)[]}
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
}
