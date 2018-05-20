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
     * @param {boolean} value
     */
    set value(value) {
        const ownerElement = this.ownerElement
        if(value) {
            if(ownerElement.hasAttribute('tabindex')) {
                this._tabIndex = ownerElement.tabIndex
                ownerElement.removeAttribute('tabindex')
            }
        }
        else {
            const tabIndex = this._tabIndex
            if(tabIndex !== null) {
                ownerElement.tabIndex = tabIndex
            }
        }
        super.value = value
    }

    /**
     * @returns {boolean}
     */
    get value() {
        return super.value
    }
}
