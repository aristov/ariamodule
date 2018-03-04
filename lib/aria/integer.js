import { ARIAAttrAssembler } from './aria'

export class IntegerAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(this.node.value)
    }

    /**
     * @param {Number} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return isNaN(value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return NaN
    }
}

export class Level extends IntegerAttrType {}

export class PosInSet extends IntegerAttrType {}

export class RowCount extends IntegerAttrType {}

export class RowIndex extends IntegerAttrType {}

export class RowSpan extends IntegerAttrType {}

export class SetSize extends IntegerAttrType {}
