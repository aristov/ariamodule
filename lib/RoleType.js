import { Role } from './Role'
import { Atomic } from './aria/Atomic'
import { Busy } from './aria/Busy'
import { Controls } from './aria/Controls'
import { Current } from './aria/Current'
import { DescribedBy } from './aria/DescribedBy'
import { Details } from './aria/Details'
import { Disabled } from './aria/Disabled'
import { DropEffect } from './aria/DropEffect'
import { ErrorMessage } from './aria/ErrorMessage'
import { FlowTo } from './aria/FlowTo'
import { Grabbed } from './aria/Grabbed'
import { HasPopup } from './aria/HasPopup'
import { Hidden } from './aria/Hidden'
import { Invalid } from './aria/Invalid'
import { KeyShortcuts } from './aria/KeyShortcuts'
import { Label } from './aria/Label'
import { LabelledBy } from './aria/LabelledBy'
import { Live } from './aria/Live'
import { Owns } from './aria/Owns'
import { Relevant } from './aria/Relevant'
import { RoleDescription } from './aria/RoleDescription'

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
     * @param {string} keyShortcuts
     */
    set keyShortcuts(keyShortcuts) {
        this.setAttr(KeyShortcuts, keyShortcuts)
    }

    /**
     * @returns {string}
     */
    get keyShortcuts() {
        return this.getAttr(KeyShortcuts)
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

export const ARIARoleType = Role.RoleType = RoleType
