import { ARIARange } from './range'
import { Orientation, ReadOnly } from './aria'

const DEFAULT_VALUE_MAX = 100
const DEFAULT_VALUE_MIN = 0

/**
 * A user input where the user selects a value from within a given range.
 *
 * https://www.w3.org/TR/wai-aria-1.1/#slider
 * https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 */
export class Slider extends ARIARange {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = 0
        super.init(init)
    }

    /**
     * @param {String} orientation
     */
    set orientation(orientation) {
        this.setAttribute(Orientation, orientation)
    }

    /**
     * @returns {String}
     */
    get orientation() {
        return this.getAttribute(Orientation) || 'horizontal'
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttribute(ReadOnly, readOnly)
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.getAttribute(ReadOnly)
    }

    /**
     * @param {Number} valueMax
     */
    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

    /**
     * @returns {Number}
     */
    get valueMax() {
        const value = super.valueMax
        return isNaN(value)? DEFAULT_VALUE_MAX : value
    }

    /**
     * @param {Number} valueMin
     */
    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    /**
     * @returns {Number}
     */
    get valueMin() {
        const value = super.valueMin
        return isNaN(value)? DEFAULT_VALUE_MIN : value
    }

    /**
     * @param {Number} valueNow
     */
    set valueNow(valueNow) {
        super.valueNow = valueNow
    }

    /**
     * @returns {Number}
     */
    get valueNow() {
        const value = super.valueNow
        return isNaN(value)?
            Math.floor((this.valueMax - this.valueMin) / 2) :
            value
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
