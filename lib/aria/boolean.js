import { ARIAAttrAssembler } from './aria'

const TOKEN_TRUE = 'true'
const TOKEN_FALSE = 'false'

export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Boolean|String}
     */
    set value(value) {
        if(value && value !== TOKEN_FALSE) {
            super.value = String(value)
        }
        else this.remove()
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return super.value === TOKEN_TRUE
    }

    /**
     * @returns {Boolean}
     */
    static get value() {
        return false
    }
}

export class Atomic extends BooleanAttrType {}

export class Busy extends BooleanAttrType {}

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

export class HasPopup extends BooleanAttrType {}

export class Hidden extends BooleanAttrType {}

export class Modal extends BooleanAttrType {}

export class Multiline extends BooleanAttrType {}

export class Multiselectable extends BooleanAttrType {}

export class ReadOnly extends BooleanAttrType {}

export class Required extends BooleanAttrType {}
