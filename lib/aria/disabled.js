import { BooleanAttrType } from './boolean'

export class Disabled extends BooleanAttrType {
    init(init) {
        this._tabIndex = NaN
        super.init(init)
    }

    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
        if(ownerElement.hasAttribute('tabindex')) {
            this._tabIndex = ownerElement.tabIndex
            ownerElement.removeAttribute('tabIndex')
        }
    }

    get ownerElement() {
        return super.ownerElement
    }

    remove() {
        if(!isNaN(this._tabIndex)) {
            this.ownerElement.tabIndex = this._tabIndex
        }
        super.remove()
    }
}
