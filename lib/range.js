import { Widget } from './widget'
import { ValueMax } from './aria/valuemax'
import { ValueMin } from './aria/valuemin'
import { ValueNow } from './aria/valuenow'
import { ValueText } from './aria/valuetext'

/**
 * @summary An input representing a range of values that can be set by the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#range
 * @abstract
 *
 * The `ARIA` prefix is used to avoid a conflict
 *  with the native `Range` class from the DOM standard
 *  https://www.w3.org/TR/dom/#range
 */
export class ARIARange extends Widget {
    /**
     * @param {number} valueMax
     */
    set valueMax(valueMax) {
        this.setAttr(ValueMax, valueMax)
    }

    /**
     * @returns {number}
     */
    get valueMax() {
        return this.getAttr(ValueMax)
    }
    
    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        this.setAttr(ValueMin, valueMin)
    }

    /**
     * @returns {number}
     */
    get valueMin() {
        return this.getAttr(ValueMin)
    }
    
    /**
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        this.setAttr(ValueNow, valueNow)
    }

    /**
     * @returns {number}
     */
    get valueNow() {
        return this.getAttr(ValueNow)
    }

    /**
     * @param {string} valueText
     */
    set valueText(valueText) {
        this.setAttr(ValueText, valueText)
    }

    /**
     * @returns {string}
     */
    get valueText() {
        return this.getAttr(ValueText)
    }
}
