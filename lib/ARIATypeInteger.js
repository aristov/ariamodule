import { ARIAAttrAssembler } from './ARIAAttrAssembler'

/**
 * A numerical value without a fractional component.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_integer
 * @abstract
 */
export class ARIATypeInteger extends ARIAAttrAssembler {
    /**
     * value = .0
     * value = .0e-1
     * value = '.0'
     * value = '.0e-1'
     * value = []
     * value = [.0]
     * value = ['.0e-1']
     * value = false
     *      => '0'
     *
     * value = 1.1
     * value = 11e-1
     * value = '1.1'
     * value = '11e-1'
     * value = [1.1]
     * value = ['11e-1']
     * value = true
     *      => '1'
     *
     * value = 4.2
     * value = 42e-1
     * value = '4.2'
     * value = '42e-1'
     * value = [4.2]
     * value = ['4.2']
     *      => '4'
     *
     * value = NaN
     * value = 'NaN'
     * value = 'xyz' // non empty string
     * value = {}
     * value = [.0, 4.2, 1.1]
     * value = function() {}
     * value = undefined
     *      => 'NaN'
     *
     * value = Infinity
     * value = 'Infinity'
     *      => 'Infinity'
     *
     * value = null
     * value = ''
     *      => no attr
     *
     * @param {number|null} value {number|null}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(Math.floor(value))
    }

    /**
     * value === '.0'
     * value === '.0e-1'
     *      => 0
     *
     * value === '1.1'
     * value === '11e-1'
     *      => 1
     *
     * value === '4.2'
     * value === '42e-1'
     *      => 4
     *
     * value === 'NaN'
     * value === 'true'
     * value === 'false'
     * value === 'undefined'
     * value === 'xyz' // non empty string
     *      => NaN
     *
     * value === 'Infinity'
     *      => Infinity
     *
     * value === ''
     * no attr
     *      => null
     *
     * @returns {number|null}
     */
    get value() {
        const value = this.node.value
        return value?
            Math.floor(Number(value)) :
            this.constructor.defaultValue
    }
}
