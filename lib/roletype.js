import { Role } from './role'
import { Atomic } from './aria/atomic'
import { Busy } from './aria/busy'
import { Controls } from './aria/controls'
import { Current } from './aria/current'
import { DescribedBy } from './aria/describedby'
import { Details } from './aria/details'
import { Disabled } from './aria/disabled'
import { DropEffect } from './aria/dropeffect'
import { ErrorMessage } from './aria/errormessage'
import { FlowTo } from './aria/flowto'
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
export class RoleType extends Role {
    /**
     * @param {boolean} atomic
     */
    set atomic(atomic) {
        this.setAttr(Atomic, atomic)
    }

    /**
     * @returns {boolean}
     */
    get atomic() {
        return this.getAttr(Atomic)
    }

    /**
     * @param {boolean} busy
     */
    set busy(busy) {
        this.setAttr(Busy, busy)
    }

    /**
     * @returns {boolean}
     */
    get busy() {
        return this.getAttr(Busy)
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        this.setAttr(Controls, controls)
    }

    /**
     * @returns {*[]}
     */
    get controls() {
        return this.getAttr(Controls)
    }

    /**
     * @param {string} current
     */
    set current(current) {
        this.setAttr(Current, current)
    }

    /**
     * @returns {string}
     */
    get current() {
        return this.getAttr(Current)
    }

    /**
     * @param {*} describedBy
     */
    set describedBy(describedBy) {
        this.setAttr(DescribedBy, describedBy)
    }

    /**
     * @returns {*[]}
     */
    get describedBy() {
        return this.getAttr(DescribedBy)
    }

    /**
     * @param {*} details
     */
    set details(details) {
        this.setAttr(Details, details)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get details() {
        return this.getAttr(Details)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.setAttr(Disabled, disabled)
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return this.getAttr(Disabled)
    }

    /**
     * @param {array|string|null} dropEffect
     * @deprecated
     */
    set dropEffect(dropEffect) {
        this.setAttr(DropEffect, dropEffect)
    }

    /**
     * @returns {array|string|null}
     * @deprecated
     */
    get dropEffect() {
        return this.getAttr(DropEffect)
    }

    /**
     * @param {*} errorMessage
     */
    set errorMessage(errorMessage) {
        this.setAttr(ErrorMessage, errorMessage)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get errorMessage() {
        return this.getAttr(ErrorMessage)
    }

    /**
     * @param {*} flowTo
     */
    set flowTo(flowTo) {
        this.setAttr(FlowTo, flowTo)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get flowTo() {
        return this.getAttr(FlowTo)
    }

    /**
     * @param {boolean|undefined} grabbed
     * @deprecated
     */
    set grabbed(grabbed) {
        this.setAttr(Grabbed, grabbed)
    }

    /**
     * @returns {boolean|undefined}
     * @deprecated
     */
    get grabbed() {
        return this.getAttr(Grabbed)
    }

    /**
     * @param {string} hasPopup
     */
    set hasPopup(hasPopup) {
        this.setAttr(HasPopup, hasPopup)
    }

    /**
     * @returns {string}
     */
    get hasPopup() {
        return this.getAttr(HasPopup)
    }

    /**
     * @param {boolean|undefined} hidden
     */
    set hidden(hidden) {
        this.setAttr(Hidden, hidden)
    }

    /**
     * @returns {boolean|undefined}
     */
    get hidden() {
        return this.getAttr(Hidden)
    }

    /**
     * @param {boolean|string} invalid
     */
    set invalid(invalid) {
        this.setAttr(Invalid, invalid)
    }

    /**
     * @returns {boolean|string}
     */
    get invalid() {
        return this.getAttr(Invalid)
    }

    /**
     * @param {string} keyShortCuts
     */
    set keyShortCuts(keyShortCuts) {
        this.setAttr(KeyShortCuts, keyShortCuts)
    }

    /**
     * @returns {string}
     */
    get keyShortCuts() {
        return this.getAttr(KeyShortCuts)
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this.setAttr(Label, label)
    }

    /**
     * @returns {string}
     */
    get label() {
        return this.getAttr(Label)
    }

    /**
     * @param {*} labelledBy {*[]}
     */
    set labelledBy(labelledBy) {
        this.setAttr(LabelledBy, labelledBy)
    }

    /**
     * @returns {*[]}
     */
    get labelledBy() {
        return this.getAttr(LabelledBy)
    }

    /**
     * @param {string} live
     */
    set live(live) {
        this.setAttr(Live, live)
    }

    /**
     * @returns {string}
     */
    get live() {
        return this.getAttr(Live)
    }

    /**
     * @param {NodeAssembler[]|*} owns
     */
    set owns(owns) {
        this.setAttr(Owns, owns)
    }

    /**
     * @returns {NodeAssembler[]|*}
     */
    get owns() {
        return this.getAttr(Owns)
    }

    /**
     * @param {string[]} relevant
     */
    set relevant(relevant) {
        this.setAttr(Relevant, relevant)
    }

    /**
     * @returns {string[]}
     */
    get relevant() {
        return this.getAttr(Relevant)
    }

    /**
     * @param {string} roleDescription
     */
    set roleDescription(roleDescription) {
        this.setAttr(RoleDescription, roleDescription)
    }

    /**
     * @returns {string}
     */
    get roleDescription() {
        return this.getAttr(RoleDescription)
    }
}
