import { AttrAssembler } from 'dommodule'

const ARIA_PREFIX = 'aria-'
const DEFAULT_VALUE = ''
const EMPTY_STRING = ''

/**
 * @param {*} object
 * @param {String} property
 * @returns {Boolean}
 */
function hasOwnProperty(object, property) {
    return Boolean(object)
        && object.constructor === Object
        && object.hasOwnProperty(property)
}

export class ARIAAttrAssembler extends AttrAssembler {
    /**
     * @param {*} [init]
     */
    /*init(init) {
        this.node.value = this.constructor.value || ''
        if(super.init(init) && hasOwnProperty(init, 'value')) {
            this.value = init.value
        }
    }*/

    static get defaultValue() {
        return EMPTY_STRING
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return ARIA_PREFIX + this.name.toLowerCase()
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.localName
    }

    /**
     * @returns {String}
     */
    /*static get value() {
        return DEFAULT_VALUE
    }*/
}
