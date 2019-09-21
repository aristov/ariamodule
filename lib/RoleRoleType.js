import { ARIAAtomic } from './ARIAAtomic'
import { ARIABusy } from './ARIABusy'
import { ARIAControls } from './ARIAControls'
import { ARIACurrent } from './ARIACurrent'
import { ARIADescribedBy } from './ARIADescribedBy'
import { ARIADetails } from './ARIADetails'
import { ARIADisabled } from './ARIADisabled'
import { ARIADropEffect } from './ARIADropEffect'
import { ARIAErrorMessage } from './ARIAErrorMessage'
import { ARIAFlowTo } from './ARIAFlowTo'
import { ARIAGrabbed } from './ARIAGrabbed'
import { ARIAHasPopup } from './ARIAHasPopup'
import { ARIAHidden } from './ARIAHidden'
import { ARIAInvalid } from './ARIAInvalid'
import { ARIAKeyShortcuts } from './ARIAKeyShortcuts'
import { ARIALabel } from './ARIALabel'
import { ARIALabelledBy } from './ARIALabelledBy'
import { ARIALive } from './ARIALive'
import { ARIAOwns } from './ARIAOwns'
import { ARIARelevant } from './ARIARelevant'
import { ARIARoleDescription } from './ARIARoleDescription'
import { Role } from './Role'

/**
 * The base role from which all other roles in this taxonomy inherit.
 * @see https://www.w3.org/TR/wai-aria-1.1/#roletype
 * @abstract
 */
export class RoleRoleType extends Role {
    /**
     * @param {class|string} object
     * @returns {*|null}
     */
    closest(object) {
        return super.closest(object) ||
            this.ownerDocument.find(object, item => {
                return item.getAttr(ARIAOwns).includes(this)
            })
    }

    /**
     * @param {boolean} atomic
     */
    set atomic(atomic) {
        this.setAttr(ARIAAtomic, atomic)
    }

    /**
     * @returns {boolean}
     */
    get atomic() {
        return this.getAttr(ARIAAtomic)
    }

    /**
     * @param {boolean} busy
     */
    set busy(busy) {
        this.setAttr(ARIABusy, busy)
    }

    /**
     * @returns {boolean}
     */
    get busy() {
        return this.getAttr(ARIABusy)
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        this.setAttr(ARIAControls, controls)
    }

    /**
     * @returns {*[]}
     */
    get controls() {
        return this.getAttr(ARIAControls)
    }

    /**
     * @param {string} current
     */
    set current(current) {
        this.setAttr(ARIACurrent, current)
    }

    /**
     * @returns {string}
     */
    get current() {
        return this.getAttr(ARIACurrent)
    }

    /**
     * @param {*} describedBy
     */
    set describedBy(describedBy) {
        this.setAttr(ARIADescribedBy, describedBy)
    }

    /**
     * @returns {*[]}
     */
    get describedBy() {
        return this.getAttr(ARIADescribedBy)
    }

    /**
     * @param {*} details
     */
    set details(details) {
        this.setAttr(ARIADetails, details)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get details() {
        return this.getAttr(ARIADetails)
    }

    /**
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.setAttr(ARIADisabled, disabled)
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
        return this.getAttr(ARIADisabled)
    }

    /**
     * @param {array|string|null} dropEffect
     * @deprecated
     */
    set dropEffect(dropEffect) {
        this.setAttr(ARIADropEffect, dropEffect)
    }

    /**
     * @returns {array|string|null}
     * @deprecated
     */
    get dropEffect() {
        return this.getAttr(ARIADropEffect)
    }

    /**
     * @param {*} errorMessage
     */
    set errorMessage(errorMessage) {
        this.setAttr(ARIAErrorMessage, errorMessage)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get errorMessage() {
        return this.getAttr(ARIAErrorMessage)
    }

    /**
     * @param {*} flowTo
     */
    set flowTo(flowTo) {
        this.setAttr(ARIAFlowTo, flowTo)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get flowTo() {
        return this.getAttr(ARIAFlowTo)
    }

    /**
     * @param {boolean|undefined} grabbed
     * @deprecated
     */
    set grabbed(grabbed) {
        this.setAttr(ARIAGrabbed, grabbed)
    }

    /**
     * @returns {boolean|undefined}
     * @deprecated
     */
    get grabbed() {
        return this.getAttr(ARIAGrabbed)
    }

    /**
     * @param {string} hasPopup
     */
    set hasPopup(hasPopup) {
        this.setAttr(ARIAHasPopup, hasPopup)
    }

    /**
     * @returns {string}
     */
    get hasPopup() {
        return this.getAttr(ARIAHasPopup)
    }

    /**
     * @param {boolean|undefined} hidden
     */
    set hidden(hidden) {
        this.setAttr(ARIAHidden, hidden)
    }

    /**
     * @returns {boolean|undefined}
     */
    get hidden() {
        return this.getAttr(ARIAHidden)
    }

    /**
     * @param {boolean|string} invalid
     */
    set invalid(invalid) {
        this.setAttr(ARIAInvalid, invalid)
    }

    /**
     * @returns {boolean|string}
     */
    get invalid() {
        return this.getAttr(ARIAInvalid)
    }

    /**
     * @param {string} keyShortcuts
     */
    set keyShortcuts(keyShortcuts) {
        this.setAttr(ARIAKeyShortcuts, keyShortcuts)
    }

    /**
     * @returns {string}
     */
    get keyShortcuts() {
        return this.getAttr(ARIAKeyShortcuts)
    }

    /**
     * @param {string} label
     */
    set label(label) {
        this.setAttr(ARIALabel, label)
    }

    /**
     * @returns {string}
     */
    get label() {
        return this.getAttr(ARIALabel)
    }

    /**
     * @param {*} labelledBy {*[]}
     */
    set labelledBy(labelledBy) {
        this.setAttr(ARIALabelledBy, labelledBy)
    }

    /**
     * @returns {*[]}
     */
    get labelledBy() {
        return this.getAttr(ARIALabelledBy)
    }

    /**
     * @param {string} live
     */
    set live(live) {
        this.setAttr(ARIALive, live)
    }

    /**
     * @returns {string}
     */
    get live() {
        return this.getAttr(ARIALive)
    }

    /**
     * @param {NodeAssembler[]|*} owns
     */
    set owns(owns) {
        this.setAttr(ARIAOwns, owns)
    }

    /**
     * @returns {NodeAssembler[]|*}
     */
    get owns() {
        return this.getAttr(ARIAOwns)
    }

    /**
     * @param {string[]} relevant
     */
    set relevant(relevant) {
        this.setAttr(ARIARelevant, relevant)
    }

    /**
     * @returns {string[]}
     */
    get relevant() {
        return this.getAttr(ARIARelevant)
    }

    /**
     * @param {string} roleDescription
     */
    set roleDescription(roleDescription) {
        this.setAttr(ARIARoleDescription, roleDescription)
    }

    /**
     * @returns {string}
     */
    get roleDescription() {
        return this.getAttr(ARIARoleDescription)
    }
}

export { RoleRoleType as RoleType }

Role.RoleType = RoleRoleType
