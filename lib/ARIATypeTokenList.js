import { ARIAAttrAssembler } from './ARIAAttrAssembler'

const { isArray } = Array
const TOKEN_SEPARATOR = ' '

/**
 * A list of one or more tokens.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token_list
 * @abstract
 */
export class ARIATypeTokenList extends ARIAAttrAssembler {
    /**
     * @param {*} value {string[]|string}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(isArray(value)) {
            const list = value.filter(Boolean)
            if(list.length) {
                this.node.value = list.join(TOKEN_SEPARATOR)
            }
            else this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {string[]}
     */
    get value() {
        const value = this.node.value
        return value? value.split(TOKEN_SEPARATOR) : []
    }

    /**
     * @param {*} value
     * @returns {boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || (isArray(value) && !value.length)
    }

    /**
     * @returns {array}
     */
    static get defaultValue() {
        return []
    }
}
