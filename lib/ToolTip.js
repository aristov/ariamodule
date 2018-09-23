import { Role } from './Role'
import { Section } from './Section'

/**
 * @summary A contextual popup that displays a description for an element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tooltip
 */
export class ToolTip extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.ToolTip = ToolTip
