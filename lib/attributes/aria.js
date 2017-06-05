import {
    BooleanAttrType,
    IDREFAttrType,
    IDREFListAttrType,
    TokenAttrType,
    TokenListAttrType,
    StringAttrType,
    IntegerAttrType,
} from './attributes'

const DEFAULT_TOKEN_VALUE_FALSE = 'false'
const DEFAULT_TOKEN_VALUE_OFF = 'off'
const DEFAULT_TOKEN_VALUE_NONE = 'none'

export class Atomic extends BooleanAttrType {}
export class Busy extends BooleanAttrType {}
export class Disabled extends BooleanAttrType {}
export class HasPopup extends BooleanAttrType {}
export class Hidden extends BooleanAttrType {}
export class Modal extends BooleanAttrType {}
export class Multiline extends BooleanAttrType {}
export class Multiselectable extends BooleanAttrType {}
export class ReadOnly extends BooleanAttrType {}
export class Required extends BooleanAttrType {}

export class ActiveDescendant extends IDREFAttrType {}
export class Details extends IDREFAttrType {}
export class ErrorMessage extends IDREFAttrType {}

export class Controls extends IDREFListAttrType {}
export class DescribedBy extends IDREFListAttrType {}
export class FlowTo extends IDREFListAttrType {}
export class LabelledBy extends IDREFListAttrType {}
export class Owns extends IDREFListAttrType {}

export class Autocomplete extends TokenAttrType {
    static get defaultValue() {
        return DEFAULT_TOKEN_VALUE_NONE
    }
}

export class Checked extends TokenAttrType {}
export class Expanded extends TokenAttrType {}
export class Invalid extends TokenAttrType {
    static get defaultValue() {
        return DEFAULT_TOKEN_VALUE_FALSE
    }
}
export class Live extends TokenAttrType {
    static get defaultValue() {
        return DEFAULT_TOKEN_VALUE_OFF
    }
}
export class Orientation extends TokenAttrType {}
export class Pressed extends TokenAttrType {}
export class Selected extends TokenAttrType {}
export class Sort extends TokenAttrType {
    static get defaultValue() {
        return DEFAULT_TOKEN_VALUE_NONE
    }
}
export class Current extends TokenAttrType {
    static get defaultValue() {
        return DEFAULT_TOKEN_VALUE_FALSE
    }
}

export class Relevant extends TokenListAttrType {}

export class KeyShortCuts extends StringAttrType {}
export class Label extends StringAttrType {}
export class Placeholder extends StringAttrType {}
export class RoleDescription extends StringAttrType {}
export class ValueText extends StringAttrType {}

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
