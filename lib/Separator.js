import { Role } from './Role'
import { Structure } from './Structure'

/**
 * @summary A divider that separates and distinguishes sections of content or groups of menuitems.
 * @see https://www.w3.org/TR/wai-aria-1.1/#separator
 */
export class Separator extends Structure {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { Separator as ARIASeparator }

Role.Separator = Separator
