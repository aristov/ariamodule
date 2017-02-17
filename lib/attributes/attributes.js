import { AttrAssembler, TOKEN_SEPARATOR } from 'dommodule'

const ARIA_PREFIX = 'aria-'
const DEFAULT_BOOLEAN_VALUE = false
const DEFAULT_ARIA_ATTR_NAME = 'roledescription'
const DEFAULT_ARIA_ATTR_VALUE = ''
const DEFAULT_INTEGER_VALUE = 0
const DEFAULT_TOKEN_VALUE_TRUE = 'true'
const DEFAULT_TOKEN_VALUE_FALSE = 'false'
const DEFAULT_TOKEN_VALUE_OFF = 'off'
const DEFAULT_TOKEN_VALUE_NONE = 'none'

export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @returns {Document}
     */
    get document() {
        return this.node.ownerDocument
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        const name = this === ARIAAttrAssembler?
            DEFAULT_ARIA_ATTR_NAME :
            this.name.toLowerCase()
        return ARIA_PREFIX + name
    }

    /**
     * @returns {String}
     */
    static get defaultValue() {
        return DEFAULT_ARIA_ATTR_VALUE
    }
}

export class BooleanAttrType extends ARIAAttrAssembler {
    /**
     * @param {Boolean} value
     */
    set value(value) {
        super.value = String(Boolean(value))
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return super.value === DEFAULT_TOKEN_VALUE_TRUE
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return DEFAULT_BOOLEAN_VALUE
    }
}

export class IntegerAttrType extends ARIAAttrAssembler {
    /**
     * @param {Number} value
     */
    set value(value) {
        super.value = String(Number(value))
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
    static get defaultValue() {
        return DEFAULT_INTEGER_VALUE
    }
}

export class StringAttrType extends ARIAAttrAssembler {}

export class TokenAttrType extends ARIAAttrAssembler {}

export class TokenListAttrType extends ARIAAttrAssembler {
    /**
     * @param {Array} value
     */
    set value(value) {
        super.value = value.filter(Boolean).join(TOKEN_SEPARATOR)
    }

    /**
     * @returns {Array}
     */
    get value() {
        const value = super.value
        return value? value.split(TOKEN_SEPARATOR) : null
    }
}

export class IDREFAttrType extends ARIAAttrAssembler {
    /**
     * @param {Element} value
     */
    set value(value) {
        super.value = value.id
    }

    /**
     * @returns {Element}
     */
    get value() {
        const value = super.value
        return value && this.node.ownerDocument.getElementById(value)
    }
}

const ID_REF_SEPARATOR = ','
const idMap = ({ id }) => id

export class IDREFListAttrType extends ARIAAttrAssembler {
    set refNodeList(refNodeList) {
        this.value = refNodeList.map(idMap).join(ID_REF_SEPARATOR)
    }
    get refNodeList() {
        const doc = this.node.ownerDocument
        const handler = id => doc.getElementById(id)
        return this.value.split(ID_REF_SEPARATOR).map(handler)
    }
}


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
