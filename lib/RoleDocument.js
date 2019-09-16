import { Role } from './Role'
import { RoleStructure } from './RoleStructure'
import { ARIAExpanded } from './ARIAExpanded'

/**
 * @summary An element containing content that assistive
 *  technology users may want to browse in a reading mode.
 * @see https://www.w3.org/TR/wai-aria-1.1/#document
 */
export class RoleDocument extends RoleStructure {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(ARIAExpanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(ARIAExpanded)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleDocument as ARIADocument }

Role.Document = RoleDocument
