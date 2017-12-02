import { AttrAssembler } from 'dommodule'

const ARIA_PREFIX = 'aria-'
const DEFAULT_NAME = 'roledescription'
const DEFAULT_VALUE = ''

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
    init(init) {
        this.node.value = this.constructor.value || ''
        super.init(init)
        if(hasOwnProperty(init, 'value')) {
            this.value = init.value
        }
    }

    /**
     * @returns {String}
     */
    static get localName() {
        const name = this === ARIAAttrAssembler?
            DEFAULT_NAME :
            this.name.toLowerCase()
        return ARIA_PREFIX + name
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
    static get value() {
        return DEFAULT_VALUE
    }
}
