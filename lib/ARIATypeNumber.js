import { ARIAAttrAssembler } from './ARIAAttrAssembler'

/**
 * Any real numerical value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_number
 * @abstract
 */
export class ARIATypeNumber extends ARIAAttrAssembler {
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
     * value = 1
     * value = .1e1
     * value = '1'
     * value = '.1e1'
     * value = [1]
     * value = ['.1e1']
     * value = true
     *      => '1'
     *
     * value = 4.2
     * value = 42e-1
     * value = '4.2'
     * value = '42e-1'
     * value = [4.2]
     * value = ['4.2']
     *      => '4.2'
     *
     * value = NaN
     * value = 'NaN'
     * value = 'xyz' // non empty string
     * value = {}
     * value = [.0, 4.2, 1]
     * value = function() {}
     * value = undefined
     *      => 'NaN'
     *
     * value = Infinity
     * value = 'Infinity'
     *      => 'Infinity'
     *
     * value = ''
     * value = null
     *      => no attr
     *
     * @param {*} value {number|null}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(Number(value))
    }

    /**
     * value === '.0'
     * value === '.0e-1'
     *      => 0
     *
     * value === '1'
     * value === '.1e1'
     *      => 1
     *
     * value === '4.2'
     * value === '42e-1'
     *      => 4.2
     *
     * value === 'NaN'
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
            Number(value) :
            this.constructor.defaultValue
    }
}
