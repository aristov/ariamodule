import { BooleanAttrType } from './boolean'

/**
 * @summary Indicates that the element is perceivable but disabled,
 *  so it is not editable or otherwise operable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-disabled
 */
export class Disabled extends BooleanAttrType {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._tabIndex = null
        super.init(init)
    }

    /**
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
        if(ownerElement.hasAttribute('tabindex')) {
            this._tabIndex = ownerElement.tabIndex
            ownerElement.removeAttribute('tabIndex')
        }
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        return super.ownerElement
    }

    /**
     * Revert tabIndex value on remove
     */
    remove() {
        if(this._tabIndex !== null) {
            this.ownerElement.tabIndex = this._tabIndex
        }
        super.remove()
    }
}
