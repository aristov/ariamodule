import { ARIAAttrAssembler } from './aria'

/**
 * @summary A numerical value without a fractional component.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_integer
 */
export class IntegerAttrType extends ARIAAttrAssembler {
    /**
     * value = .0
     * value = .0e-1
     * value = ''
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
     *      => no attr
     *
     * @param {number} value {number|null}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(Math.floor(value))
    }

    /**
     * value === ''
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
     * no attr
     *      => null
     *
     * @returns {number}
     */
    get value() {
        return Math.floor(Number(this.node.value))
    }
}
