import { Role } from './Role'
import { RoleListItem } from './RoleListItem'
import { RoleSection } from './RoleSection'

/**
 * A section containing listitem elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#list
 */
export class RoleList extends RoleSection {
    /**
     * @returns {array.ListItem|*}
     */
    get items() {
        return this.findAll(RoleListItem)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleList as List }

Role.List = RoleList
