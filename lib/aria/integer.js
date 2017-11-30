import { ARIAAttrAssembler } from './aria'

export class IntegerAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(isNaN(value)) this.remove()
        else super.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(super.value)
    }

    /**
     * @returns {Number}
     */
    static get value() {
        return NaN
    }
}

export class ColCount extends IntegerAttrType {}

export class ColIndex extends IntegerAttrType {}

export class ColSpan extends IntegerAttrType {}

export class Level extends IntegerAttrType {}

export class PosInSet extends IntegerAttrType {}

export class RowCount extends IntegerAttrType {}

export class RowIndex extends IntegerAttrType {}

export class RowSpan extends IntegerAttrType {}

export class SetSize extends IntegerAttrType {}

export class ValueMax extends IntegerAttrType {}

export class ValueMin extends IntegerAttrType {}

export class ValueNow extends IntegerAttrType {}
