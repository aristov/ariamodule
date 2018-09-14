import { AttrAssembler } from 'dommodule/lib/AttrAssembler'

const EMPTY_STRING = ''
const FRACTION_START = 2
const LENGTH = 10
const VALUE_PROPERTY_NAME = 'value'
const registry = {}
const { substr } = String.prototype

/**
 * @see https://www.w3.org/TR/dom/#concept-id
 * @see https://www.w3.org/TR/html/dom.html#element-attrdef-global-id
 */
export class Id extends AttrAssembler {
    /**
     * @param {{}} init
     * @param {string} [init.value]
     */
    init(init) {
        super.init(init)
        if(!init.hasOwnProperty(VALUE_PROPERTY_NAME)) {
            this.value = this.constructor.uniqueValue
        }
    }

    /**
     * Remove the attribute and delete it's record from the registry
     */
    remove() {
        super.remove()
        delete this.constructor.registry[this.value]
    }

    /**
     * @param {string} value
     */
    set value(value) {
        const { name, registry } = this.constructor
        if(value === EMPTY_STRING || registry[value] || document.getElementById(value)) {
            throw Error(`Failed to set '${ value }' on ${ name }: the value must be unique and not the empty string.`)
        }
        else registry[super.value = value] = this
    }

    /**
     * @returns {string}
     */
    get value() {
        return super.value
    }

    /**
     * @returns {string}
     */
    static get uniqueValue() {
        let value
        do value = this.value
        while(this.registry[value] || document.getElementById(value))
        return value
    }

    /**
     * @returns {string}
     */
    static get value() {
        return this.localName.toUpperCase() + substr.call(Math.random(), FRACTION_START, LENGTH)
    }

    /**
     * @returns {{}}
     */
    static get registry() {
        return registry
    }
}

window.Id = Id
