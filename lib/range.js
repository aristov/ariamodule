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
     * @param {Number} valueMax
     */
    set valueMax(valueMax) {
        this.setAttribute(ValueMax, valueMax)
    }

    /**
     * @returns {Number}
     */
    get valueMax() {
        return this.getAttribute(ValueMax)
    }
    
    /**
     * @param {Number} valueMin
     */
    set valueMin(valueMin) {
        this.setAttribute(ValueMin, valueMin)
    }

    /**
     * @returns {Number}
     */
    get valueMin() {
        return this.getAttribute(ValueMin)
    }
    
    /**
     * @param {Number} valueNow
     */
    set valueNow(valueNow) {
        this.setAttribute(ValueNow, valueNow)
    }

    /**
     * @returns {Number}
     */
    get valueNow() {
        return this.getAttribute(ValueNow)
    }

    /**
     * @param {String} valueText
     */
    set valueText(valueText) {
        this.setAttribute(ValueText, valueText)
    }

    /**
     * @returns {String}
     */
    get valueText() {
        return this.getAttribute(ValueText)
    }
}
