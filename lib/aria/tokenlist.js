import { ARIAAttrAssembler } from './aria'

const TOKEN_SEPARATOR = ' '

export class TokenListAttrType extends ARIAAttrAssembler {
    /**
     * @param {*} value {String[]|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(Array.isArray(value)) {
            const list = value.filter(Boolean)
            if(list.length) {
                this.node.value = list.join(TOKEN_SEPARATOR)
            }
            else this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String[]}
     */
    get value() {
        const value = this.node.value
        return value? value.split(TOKEN_SEPARATOR) : []
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || (Array.isArray(value) && !value.length)
    }

    /**
     * @returns {Array}
     */
    static get defaultValue() {
        return []
    }
}
