import { BooleanAttrType } from './boolean'

export class Disabled extends BooleanAttrType {
    /**
     * @param {*} init
     */
    init(init) {
        this._tabIndex = NaN
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
        if(!isNaN(this._tabIndex)) {
            this.ownerElement.tabIndex = this._tabIndex
        }
        super.remove()
    }
}
