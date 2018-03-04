import { TokenAttrType } from './token'

const TOKEN_FALSE = 'false'

export class Invalid extends TokenAttrType {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}
