import { ARIAAttrAssembler } from './aria'

const TOKEN_NONE = 'none'
const TOKEN_SEPARATOR = ' '

export class TokenListAttrType extends ARIAAttrAssembler {
    /**
     * @param {...String} tokens
     */
    addTokens(...tokens) {
        const value = this.value
        tokens.forEach(token => {
            if(!value.includes(token)) value.push(token)
        })
        this.value = value
    }

    /**
     * @param {String} token
     * @returns {Boolean}
     */
    containsToken(token) {
        return this.value.includes(token)
    }

    /*remove() {
        if(this.ownerElement) super.remove()
    }*/

    /**
     * @param {...String} tokens
     * @returns {AttrAssembler}
     */
    removeTokens(...tokens) {
        if(tokens.length) {
            const value = this.value
            tokens.forEach(token => {
                const index = value.indexOf(token)
                if(index > -1) value.splice(index, 1)
            })
            this.value = value
        }
    }

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

export class DropEffect extends TokenListAttrType {
    /**
     * @returns {{String}[]}
     */
    /*static get value() {
        return [TOKEN_NONE]
    }*/
}

export class Relevant extends TokenListAttrType {}
