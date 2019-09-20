import { ARIAValueMax } from './ARIAValueMax'
import { ARIAValueMin } from './ARIAValueMin'
import { ARIAValueNow } from './ARIAValueNow'
import { ARIAValueText } from './ARIAValueText'
import { Role } from './Role'
import { RoleWidget } from './RoleWidget'

/**
 * An input representing a range of values that can be set by the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#range
 * @abstract
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

Role.Range = RoleRange
