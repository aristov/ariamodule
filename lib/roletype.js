import { ARIADOMAssembler } from './assembler'

export class RoleType extends ARIADOMAssembler {

    set atomic(atomic) {
        this.node.setAttribute('aria-atomic', atomic)
    }

    get atomic() {
        return this.node.getAttribute('aria-atomic')
    }

    set busy(busy) {
        this.node.setAttribute('aria-busy', busy)
    }

    get busy() {
        return this.node.getAttribute('aria-busy')
    }

    set controls(controls) {
        this.node.setAttribute('aria-controls', controls)
    }

    get controls() {
        return this.node.getAttribute('aria-controls')
    }

    set current(current) {
        this.node.setAttribute('aria-current', current)
    }

    get current() {
        return this.node.getAttribute('aria-current')
    }

    set describedBy(describedBy) {
        this.node.setAttribute('aria-describedBy', describedBy)
    }

    get describedBy() {
        return this.node.getAttribute('aria-describedBy')
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
        this.node.setAttribute('aria-disabled', String(disabled))
        if(disabled) this.node.removeAttribute('tabindex')
        else this.node.tabIndex = -1
    }

    /**
     *
     * @returns {boolean}
     */
    get disabled() {
        return this.node.getAttribute('aria-disabled') === 'true'
    }

    set dropEffect(dropEffect) {
        this.node.setAttribute('aria-dropEffect', dropEffect)
    }

    get dropEffect() {
        return this.node.getAttribute('aria-dropEffect')
    }

    set errorMessage(errorMessage) {
        this.node.setAttribute('aria-errorMessage', errorMessage)
    }

    get errorMessage() {
        return this.node.getAttribute('aria-errorMessage')
    }

    set flowTo(flowTo) {
        this.node.setAttribute('aria-flowTo', flowTo)
    }

    get flowTo() {
        return this.node.getAttribute('aria-flowTo')
    }

    set grabbed(grabbed) {
        this.node.setAttribute('aria-grabbed', grabbed)
    }

    get grabbed() {
        return this.node.getAttribute('aria-grabbed')
    }

    set hasPopup(hasPopup) {
        this.node.setAttribute('aria-hasPopup', hasPopup)
    }

    get hasPopup() {
        return this.node.getAttribute('aria-hasPopup')
    }

    set hidden(hidden) {
        this.node.setAttribute('aria-hidden', String(hidden))
    }

    get hidden() {
        return this.node.getAttribute('aria-hidden') === 'true'
    }

    set invalid(invalid) {
        this.node.setAttribute('aria-invalid', invalid)
    }

    get invalid() {
        return this.node.getAttribute('aria-invalid')
    }

    set keyShortCuts(keyShortCuts) {
        this.node.setAttribute('aria-keyShortCuts', keyShortCuts)
    }

    get keyShortCuts() {
        return this.node.getAttribute('aria-keyShortCuts')
    }

    set label(label) {
        this.node.setAttribute('aria-label', label)
    }

    get label() {
        return this.node.getAttribute('aria-label')
    }

    set labelledBy(labelledBy) {
        this.node.setAttribute('aria-labelledBy', labelledBy)
    }

    get labelledBy() {
        return this.node.getAttribute('aria-labelledBy')
    }

    set live(live) {
        this.node.setAttribute('aria-live', live)
    }

    get live() {
        return this.node.getAttribute('aria-live')
    }

    set owns(owns) {
        this.node.setAttribute('aria-owns', owns.map(node => node.id).join(' '))
    }

    get owns() {
        const owns = this.node.getAttribute('aria-owns')
        const handler = id => document.getElementById(id)
        return owns? owns.split(' ').map(handler) : []
    }

    set relevant(relevant) {
        this.node.setAttribute('aria-relevant', relevant)
    }

    get relevant() {
        return this.node.getAttribute('aria-relevant')
    }

    set roleDescription(roleDescription) {
        this.node.setAttribute('aria-roleDescription', roleDescription)
    }

    get roleDescription() {
        return this.node.getAttribute('aria-roleDescription')
    }
}
