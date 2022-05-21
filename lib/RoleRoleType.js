import { AriaAtomic } from './AriaAtomic.js'
import { AriaBusy } from './AriaBusy.js'
import { AriaControls } from './AriaControls.js'
import { AriaCurrent } from './AriaCurrent.js'
import { AriaDescribedBy } from './AriaDescribedBy.js'
import { AriaDetails } from './AriaDetails.js'
import { AriaDisabled } from './AriaDisabled.js'
import { AriaDropEffect } from './AriaDropEffect.js'
import { AriaErrorMessage } from './AriaErrorMessage.js'
import { AriaFlowTo } from './AriaFlowTo.js'
import { AriaGrabbed } from './AriaGrabbed.js'
import { AriaHasPopup } from './AriaHasPopup.js'
import { AriaHidden } from './AriaHidden.js'
import { AriaInvalid } from './AriaInvalid.js'
import { AriaKeyShortcuts } from './AriaKeyShortcuts.js'
import { AriaLabel } from './AriaLabel.js'
import { AriaLabelledBy } from './AriaLabelledBy.js'
import { AriaLive } from './AriaLive.js'
import { AriaOwns } from './AriaOwns.js'
import { AriaRelevant } from './AriaRelevant.js'
import { AriaRoleDescription } from './AriaRoleDescription.js'
import { RoleType } from './RoleType.js'

/**
 * The base role from which all other roles in this taxonomy inherit.
 * @see https://www.w3.org/TR/wai-aria-1.1/#roletype
 * @abstract
 */
export class RoleRoleType extends RoleType
{
  /**
   * @param {boolean} atomic
   */
  set atomic(atomic) {
    this.setAttr(AriaAtomic, atomic)
  }

  /**
   * @returns {boolean}
   */
  get atomic() {
    return this.getAttr(AriaAtomic)
  }

  /**
   * @param {boolean} busy
   */
  set busy(busy) {
    this.setAttr(AriaBusy, busy)
  }

  /**
   * @returns {boolean}
   */
  get busy() {
    return this.getAttr(AriaBusy)
  }

  /**
   * @param {*} controls
   */
  set controls(controls) {
    this.setAttr(AriaControls, controls)
  }

  /**
   * @returns {*[]}
   */
  get controls() {
    return this.getAttr(AriaControls)
  }

  /**
   * @param {string} current
   */
  set current(current) {
    this.setAttr(AriaCurrent, current)
  }

  /**
   * @returns {string}
   */
  get current() {
    return this.getAttr(AriaCurrent)
  }

  /**
   * @param {*} describedBy
   */
  set describedBy(describedBy) {
    this.setAttr(AriaDescribedBy, describedBy)
  }

  /**
   * @returns {*[]}
   */
  get describedBy() {
    return this.getAttr(AriaDescribedBy)
  }

  /**
   * @param {*} details
   */
  set details(details) {
    this.setAttr(AriaDetails, details)
  }

  /**
   * @returns {DomElem|*|null}
   */
  get details() {
    return this.getAttr(AriaDetails)
  }

  /**
   * @param {boolean} disabled
   */
  set disabled(disabled) {
    this.setAttr(AriaDisabled, disabled)
  }

  /**
   * @returns {boolean}
   */
  get disabled() {
    return this.getAttr(AriaDisabled)
  }

  /**
   * @param {array|string|null} dropEffect
   * @deprecated
   */
  set dropEffect(dropEffect) {
    this.setAttr(AriaDropEffect, dropEffect)
  }

  /**
   * @returns {array|string|null}
   * @deprecated
   */
  get dropEffect() {
    return this.getAttr(AriaDropEffect)
  }

  /**
   * @param {*} errorMessage
   */
  set errorMessage(errorMessage) {
    this.setAttr(AriaErrorMessage, errorMessage)
  }

  /**
   * @returns {DomElem|*|null}
   */
  get errorMessage() {
    return this.getAttr(AriaErrorMessage)
  }

  /**
   * @param {*} flowTo
   */
  set flowTo(flowTo) {
    this.setAttr(AriaFlowTo, flowTo)
  }

  /**
   * @returns {DomElem|*|null}
   */
  get flowTo() {
    return this.getAttr(AriaFlowTo)
  }

  /**
   * @param {boolean|undefined} grabbed
   * @deprecated
   */
  set grabbed(grabbed) {
    this.setAttr(AriaGrabbed, grabbed)
  }

  /**
   * @returns {boolean|undefined}
   * @deprecated
   */
  get grabbed() {
    return this.getAttr(AriaGrabbed)
  }

  /**
   * @param {string} hasPopup
   */
  set hasPopup(hasPopup) {
    this.setAttr(AriaHasPopup, hasPopup)
  }

  /**
   * @returns {string}
   */
  get hasPopup() {
    return this.getAttr(AriaHasPopup)
  }

  /**
   * @param {boolean|undefined} hidden
   */
  set hidden(hidden) {
    this.setAttr(AriaHidden, hidden)
  }

  /**
   * @returns {boolean|undefined}
   */
  get hidden() {
    return this.getAttr(AriaHidden)
  }

  /**
   * @param {boolean|string} invalid
   */
  set invalid(invalid) {
    this.setAttr(AriaInvalid, invalid)
  }

  /**
   * @returns {boolean|string}
   */
  get invalid() {
    return this.getAttr(AriaInvalid)
  }

  /**
   * @param {string} keyShortcuts
   */
  set keyShortcuts(keyShortcuts) {
    this.setAttr(AriaKeyShortcuts, keyShortcuts)
  }

  /**
   * @returns {string}
   */
  get keyShortcuts() {
    return this.getAttr(AriaKeyShortcuts)
  }

  /**
   * @param {string} label
   */
  set label(label) {
    this.setAttr(AriaLabel, label)
  }

  /**
   * @returns {string}
   */
  get label() {
    return this.getAttr(AriaLabel)
  }

  /**
   * @param {*} labelledBy {*[]}
   */
  set labelledBy(labelledBy) {
    this.setAttr(AriaLabelledBy, labelledBy)
  }

  /**
   * @returns {*[]}
   */
  get labelledBy() {
    return this.getAttr(AriaLabelledBy)
  }

  /**
   * @param {string} live
   */
  set live(live) {
    this.setAttr(AriaLive, live)
  }

  /**
   * @returns {string}
   */
  get live() {
    return this.getAttr(AriaLive)
  }

  /**
   * @param {DomNode[]|*} owns
   */
  set owns(owns) {
    this.setAttr(AriaOwns, owns)
  }

  /**
   * @returns {DomNode[]|*}
   */
  get owns() {
    return this.getAttr(AriaOwns)
  }

  /**
   * @param {string[]} relevant
   */
  set relevant(relevant) {
    this.setAttr(AriaRelevant, relevant)
  }

  /**
   * @returns {string[]}
   */
  get relevant() {
    return this.getAttr(AriaRelevant)
  }

  /**
   * @param {string} roleDescription
   */
  set roleDescription(roleDescription) {
    this.setAttr(AriaRoleDescription, roleDescription)
  }

  /**
   * @returns {string}
   */
  get roleDescription() {
    return this.getAttr(AriaRoleDescription)
  }
}
