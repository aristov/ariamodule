import { Role } from './Role'
import { RoleWidget } from './RoleWidget'
import { ARIAValueMax } from './aria/ARIAValueMax'
import { ARIAValueMin } from './aria/ARIAValueMin'
import { ARIAValueNow } from './aria/ARIAValueNow'
import { ARIAValueText } from './aria/ARIAValueText'

/**
 * @summary An input representing a range of values that can be set by the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#range
 * @abstract
 *
 * Not to be confused with the native Range interface of the DOM standard
 * @see https://www.w3.org/TR/dom/#range
 */
export class RoleRange extends RoleWidget {
    /**
     * @param {number} valueMax
     */
    set valueMax(valueMax) {
        this.setAttr(ARIAValueMax, valueMax)
    }

    /**
     * @returns {number}
     */
    get valueMax() {
        return this.getAttr(ARIAValueMax)
    }
    
    /**
     * @param {number} valueMin
     */
    set valueMin(valueMin) {
        this.setAttr(ARIAValueMin, valueMin)
    }

    /**
     * @returns {number}
     */
    get valueMin() {
        return this.getAttr(ARIAValueMin)
    }
    
    /**
     * @param {number} valueNow
     */
    set valueNow(valueNow) {
        this.setAttr(ARIAValueNow, valueNow)
    }

    /**
     * @returns {number}
     */
    get valueNow() {
        return this.getAttr(ARIAValueNow)
    }

    /**
     * @param {string} valueText
     */
    set valueText(valueText) {
        this.setAttr(ARIAValueText, valueText)
    }

    /**
     * @returns {string}
     */
    get valueText() {
        return this.getAttr(ARIAValueText)
    }
}

export { RoleRange as Range, RoleRange as ARIARange }

Role.Range = RoleRange
