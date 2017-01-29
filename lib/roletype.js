/**
 * todo backspace multiple remove
 * todo merge already merged cells
 */

import { ARIADOMAssembler } from './assembler'

export class RoleType extends ARIADOMAssembler {

    set atomic(atomic) {
        this.node.setAttribute('aria-atomic', atomic)
    }

    get atomic() {
        return this.node.getAttribute('aria-atomic')
    }

    /**
     *
     * @param {Boolean} busy
     */
    set busy(busy) {
        this.node.setAttribute('aria-busy', String(busy))
    }

    /**
     *
     * @returns {Boolean}
     */
    get busy() {
        return this.node.getAttribute('aria-busy') === 'true'
    }

    set controls(controls) {
        this.node.setAttribute('aria-controls', controls)
    }

    get controls() {
        return this.node.getAttribute('aria-controls')
    }

    set current(current) {
        if(current === 'false') {
            this.node.removeAttribute('aria-current')
        }
        else this.node.setAttribute('aria-current', current)
    }

    get current() {
        return this.node.getAttribute('aria-current')
    }

    set describedBy(describedBy) {
        this.node.setAttribute('aria-describedby', describedBy)
    }

    get describedBy() {
        return this.node.getAttribute('aria-describedby')
    }

    set details(details) {
        this.node.setAttribute('aria-details', details)
    }

    get details() {
        return this.node.getAttribute('aria-details')
    }

    /**
     *
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        if(disabled) {
            this.node.setAttribute('aria-disabled', 'true')
            this.node.removeAttribute('tabindex')
        } else  {
            this.node.removeAttribute('aria-disabled')
            this.node.tabIndex = -1
        }
    }

    /**
     *
     * @returns {boolean}
     */
    get disabled() {
        return this.node.getAttribute('aria-disabled') === 'true'
    }

    set dropEffect(dropEffect) {
        this.node.setAttribute('aria-dropeffect', dropEffect)
    }

    get dropEffect() {
        return this.node.getAttribute('aria-dropeffect')
    }

    set errorMessage(errorMessage) {
        this.node.setAttribute('aria-errormessage', errorMessage)
    }

    get errorMessage() {
        return this.node.getAttribute('aria-errormessage')
    }

    set flowTo(flowTo) {
        this.node.setAttribute('aria-flowto', flowTo)
    }

    get flowTo() {
        return this.node.getAttribute('aria-flowto')
    }

    set grabbed(grabbed) {
        this.node.setAttribute('aria-grabbed', grabbed)
    }

    get grabbed() {
        return this.node.getAttribute('aria-grabbed')
    }

    set hasPopup(hasPopup) {
        this.node.setAttribute('aria-haspopup', hasPopup)
    }

    get hasPopup() {
        return this.node.getAttribute('aria-haspopup')
    }

    set hidden(hidden) {
        this.node.hidden = hidden
    }

    get hidden() {
        return this.node.hidden
    }

    set invalid(invalid) {
        this.node.setAttribute('aria-invalid', invalid)
    }

    get invalid() {
        return this.node.getAttribute('aria-invalid')
    }

    set keyShortCuts(keyShortCuts) {
        this.node.setAttribute('aria-keyshortcuts', keyShortCuts)
    }

    get keyShortCuts() {
        return this.node.getAttribute('aria-keyshortcuts')
    }

    set label(label) {
        this.node.setAttribute('aria-label', label)
    }

    get label() {
        return this.node.getAttribute('aria-label')
    }

    set labelledBy(labelledBy) {
        this.node.setAttribute('aria-labelledby', labelledBy)
    }

    get labelledBy() {
        return this.node.getAttribute('aria-labelledby')
    }

    set live(live) {
        this.node.setAttribute('aria-live', live)
    }

    get live() {
        return this.node.getAttribute('aria-live')
    }

    set owns(owns) {
        this.node.setAttribute('aria-owns', owns.map(cell => cell.id).join(' '))
    }

    get owns() {
        const owns = this.node.getAttribute('aria-owns')
        const handler = id => {
            const node = document.getElementById(id)
            return node && node.assembler
        }
        return owns? owns.split(' ').map(handler) : []
    }

    set relevant(relevant) {
        this.node.setAttribute('aria-relevant', relevant)
    }

    get relevant() {
        return this.node.getAttribute('aria-relevant')
    }

    set roleDescription(roleDescription) {
        this.node.setAttribute('aria-roledescription', roleDescription)
    }

    get roleDescription() {
        return this.node.getAttribute('aria-roledescription')
    }
}
