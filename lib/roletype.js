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
     * @param {boolean} atomic
     */
    set atomic(atomic) {
        this.setAttribute(Atomic, atomic)
    }

    /**
     * @returns {boolean}
     */
    get atomic() {
        return this.getAttribute(Atomic)
    }

    /**
     * @param {boolean} busy
     */
    set busy(busy) {
        this.setAttribute(Busy, busy)
    }

    /**
     * @returns {boolean}
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
     * @param {string} current
     */
    set current(current) {
        this.setAttribute(Current, current)
    }

    /**
     * @returns {string}
     */
    get current() {
        return this.getAttribute(Current)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.setAttribute(Disabled, disabled)
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return this.getAttribute(Disabled)
    }

    /**
     * @param {array|string|null} dropEffect
     */
    set dropEffect(dropEffect) {
        this.setAttribute(DropEffect, dropEffect)
    }

    /**
     * @returns {array|string|null}
     */
    get dropEffect() {
        return this.getAttribute(DropEffect)
    }

    /**
     * @param {*} errorMessage
     */
    set errorMessage(errorMessage) {
        this.setAttribute(ErrorMessage, errorMessage)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get errorMessage() {
        return this.getAttribute(ErrorMessage)
    }

    /**
     * @param {boolean|undefined} grabbed
     */
    set grabbed(grabbed) {
        this.setAttribute(Grabbed, grabbed)
    }

    /**
     * @returns {boolean|undefined}
     */
    get grabbed() {
        return this.getAttribute(Grabbed)
    }

    /**
     * @param {string} hasPopup
     */
    set hasPopup(hasPopup) {
        this.setAttribute(HasPopup, hasPopup)
    }

    /**
     * @returns {string}
     */
    get hasPopup() {
        return this.getAttribute(HasPopup)
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        this.setAttribute(Hidden, hidden)
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        return this.getAttribute(Hidden)
    }

    /**
     * @param {string} invalid
     */
    set invalid(invalid) {
        this.setAttribute(Invalid, invalid)
    }

    /**
     * @returns {string}
     */
    get invalid() {
        return this.getAttribute(Invalid)
    }

    /**
     * @param {string} keyShortCuts
     */
    set keyShortCuts(keyShortCuts) {
        this.setAttribute(KeyShortCuts, keyShortCuts)
    }

    /**
     * @returns {string}
     */
    get keyShortCuts() {
        return this.getAttribute(KeyShortCuts)
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this.setAttribute(Label, label)
    }

    /**
     * @returns {string}
     */
    get label() {
        return this.getAttribute(Label)
    }

    /**
     * @param {*} labelledBy {*[]}
     */
    set labelledBy(labelledBy) {
        this.setAttribute(LabelledBy, labelledBy)
    }

    /**
     * @returns {*[]}
     */
    get labelledBy() {
        return this.getAttribute(LabelledBy)
    }

    /**
     * @param {string} live
     */
    set live(live) {
        this.setAttribute(Live, live)
    }

    /**
     * @returns {string}
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
     * @param {string[]} relevant
     */
    set relevant(relevant) {
        this.setAttribute(Relevant, relevant)
    }

    /**
     * @returns {string[]}
     */
    get relevant() {
        return this.getAttribute(Relevant)
    }

    /**
     * @param {string} roleDescription
     */
    set roleDescription(roleDescription) {
        this.setAttribute(RoleDescription, roleDescription)
    }

    /**
     * @returns {string}
     */
    get roleDescription() {
        return this.getAttribute(RoleDescription)
    }
}
