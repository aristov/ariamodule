import { RoleAttrAssembler } from './role'

export class RoleType extends RoleAttrAssembler {
    /**
     * @param {Boolean} busy
     */
    set busy(busy) {
        if(busy) {
            this.ownerElement.setAttribute('aria-busy', 'true')
        }
        else this.ownerElement.removeAttribute('aria-busy')
    }

    /**
     * @returns {Boolean}
     */
    get busy() {
        return this.ownerElement.getAttribute('aria-busy') === 'true'
    }

    /**
     * @param {String} controls // FIXME ID reference list
     */
    set controls(controls) {
        this.ownerElement.setAttribute('aria-controls', controls)
    }

    /**
     * @returns {String}
     */
    get controls() {
        return this.ownerElement.getAttribute('aria-controls')
    }

    /**
     * @param {String} current
     */
    set current(current) {
        if(!current || current === 'false') {
            this.ownerElement.removeAttribute('aria-current')
        }
        else this.ownerElement.setAttribute('aria-current', current)
    }

    /**
     * @returns {String}
     */
    get current() {
        return this.ownerElement.getAttribute('aria-current')
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        if(disabled) {
            this.ownerElement.setAttribute('aria-disabled', 'true')
        }
        else this.ownerElement.removeAttribute('aria-disabled')
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.ownerElement.getAttribute('aria-disabled') === 'true'
    }

    /**
     * @param {String} dropEffect
     */
    set dropEffect(dropEffect) {
        if(dropEffect) {
            this.ownerElement.setAttribute('aria-dropeffect', dropEffect)
        }
        else this.ownerElement.removeAttribute('aria-dropeffect')
    }

    /**
     * @returns {String}
     */
    get dropEffect() {
        return this.ownerElement.getAttribute('aria-dropeffect')
    }

    /**
     * @param {String} errorMessage
     */
    set errorMessage(errorMessage) {
        this.ownerElement.setAttribute('aria-errormessage', errorMessage)
    }

    /**
     * @returns {String}
     */
    get errorMessage() {
        return this.ownerElement.getAttribute('aria-errormessage')
    }

    /**
     * @param {String} grabbed
     */
    set grabbed(grabbed) {
        if(grabbed) {
            this.ownerElement.setAttribute('aria-grabbed', grabbed)
        }
        else this.ownerElement.removeAttribute('aria-grabbed')
    }

    /**
     * @returns {String}
     */
    get grabbed() {
        return this.ownerElement.getAttribute('aria-grabbed')
    }

    /**
     * @param {String} hasPopup
     */
    set hasPopup(hasPopup) {
        this.ownerElement.setAttribute('aria-haspopup', hasPopup)
    }

    /**
     * @returns {String}
     */
    get hasPopup() {
        return this.ownerElement.getAttribute('aria-haspopup')
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        this.ownerElement.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return this.ownerElement.hidden
    }

    /**
     * @param {String} invalid
     */
    set invalid(invalid) {
        this.ownerElement.setAttribute('aria-invalid', invalid)
    }

    /**
     * @returns {String}
     */
    get invalid() {
        return this.ownerElement.getAttribute('aria-invalid')
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.ownerElement.setAttribute('aria-label', label)
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.ownerElement.getAttribute('aria-label')
    }

    /**
     * @param {String} labelledBy // FIXME ID reference list
     */
    set labelledBy(labelledBy) {
        this.ownerElement.setAttribute('aria-labelledby', labelledBy)
    }

    /**
     * @returns {String}
     */
    get labelledBy() {
        return this.ownerElement.getAttribute('aria-labelledby')
    }

    /**
     * @param {String} live
     */
    set live(live) {
        this.ownerElement.setAttribute('aria-live', live)
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.ownerElement.getAttribute('aria-live')
    }

    /**
     * @param {[Element]} owns
     */
    set owns(owns) {
        if(owns.length) {
            this.ownerElement.setAttribute('aria-owns', owns.map(({ id }) => id).join(' '))
        }
        else this.ownerElement.removeAttribute('aria-owns')
    }

    /**
     * @returns {[Element]}
     */
    get owns() {
        const owns = this.ownerElement.getAttribute('aria-owns')
        const handler = id => {
            const node = document.getElementById(id)
            return this.getInstance(node)
        }
        return owns? owns.split(' ').map(handler) : []
    }

    /**
     * @param {String} relevant
     */
    set relevant(relevant) {
        this.ownerElement.setAttribute('aria-relevant', relevant)
    }

    /**
     * @returns {String}
     */
    get relevant() {
        return this.ownerElement.getAttribute('aria-relevant')
    }

    /**
     * @param {String} roleDescription
     */
    set roleDescription(roleDescription) {
        this.ownerElement.setAttribute('aria-roledescription', roleDescription)
    }

    /**
     * @returns {String}
     */
    get roleDescription() {
        return this.ownerElement.getAttribute('aria-roledescription')
    }
}
