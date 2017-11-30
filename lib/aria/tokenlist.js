import { ARIAAttrAssembler } from './aria'

const TOKEN_NONE = 'none'
const TOKEN_SEPARATOR = ' '

export class TokenListAttrType extends ARIAAttrAssembler {
    /**
     * @param {(String)[]} tokens
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

    /**
     * @param {(String)[]} tokens
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
     * @param {*} value {(String)[]|String}
     */
    set value(value) {
        if(Array.isArray(value)) {
            const list = value.filter(Boolean)
            if(list.length) {
                super.value = list.join(TOKEN_SEPARATOR)
            }
            else this.remove()
        }
        else {
            if(value) super.value = value
            else this.remove()
        }
    }

    /**
     * @returns {(String)[]}
     */
    get value() {
        const value = super.value
        return value? value.split(TOKEN_SEPARATOR) : []
    }

    /**
     * @returns {Array}
     */
    static get value() {
        return []
    }
}

export class DropEffect extends TokenListAttrType {
    /**
     * @returns {{String}[]}
     */
    static get value() {
        return [TOKEN_NONE]
    }
}

export class Relevant extends TokenListAttrType {}
