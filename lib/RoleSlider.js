import { ARIAOrientation } from './ARIAOrientation'
import { ARIAReadOnly } from './ARIAReadOnly'
import { Role } from './Role'
import { RoleRange } from './RoleRange'

const DEFAULT_VALUE_MIN = 0
const DEFAULT_VALUE_MAX = 100

/**
 * A user input where the user selects a value from within a given range.
 * @see https://www.w3.org/TR/wai-aria-1.1/#slider
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 * @mixes RoleInput
 */
export class RoleSlider extends RoleRange {
    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        this.setAttr(ARIAOrientation, orientation)
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.getAttr(ARIAOrientation) || 'horizontal'
    }

    /**
     * @param {boolean} readOnly
     */
    set readOnly(readOnly) {
        this.setAttr(ARIAReadOnly, readOnly)
    }

    /**
     * @returns {boolean}
     */
    get readOnly() {
        return this.getAttr(ARIAReadOnly)
    }

    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        super.valueMin = valueMin
    }

    /**
     * @returns {number}
     */
    get valueMin() {
        const value = super.valueMin
        return value === null? DEFAULT_VALUE_MIN : value
    }

    /**
     * @param {number} valueMax
     */
    set valueMax(valueMax) {
        super.valueMax = valueMax
    }

    /**
     * @returns {number}
     */
    get valueMax() {
        const value = super.valueMax
        return value === null? DEFAULT_VALUE_MAX : value
    }

    /**
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        super.valueNow = valueNow
    }

    /**
     * @returns {number}
     */
    get valueNow() {
        const { valueMin, valueMax } = this
        const valueNow = super.valueNow
        if(valueNow === null) {
            return valueMin + (valueMax - valueMin) / 2
        }
        return Math.min(Math.max(valueMin, valueNow), valueMax)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleSlider as Slider }

Role.Slider = RoleSlider
