import { Role } from './Role'
import { RoleWidget } from './RoleWidget'
import { ValueMax } from './aria/ValueMax'
import { ValueMin } from './aria/ValueMin'
import { ValueNow } from './aria/ValueNow'
import { ValueText } from './aria/ValueText'

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

export { RoleRange as Range, RoleRange as ARIARange }

Role.Range = RoleRange
