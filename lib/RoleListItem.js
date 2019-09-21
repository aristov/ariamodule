import { ARIALevel } from './ARIALevel'
import { ARIAPosInSet } from './ARIAPosInSet'
import { ARIASetSize } from './ARIASetSize'
import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A single item in a list or directory.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listitem
 */
export class RoleListItem extends RoleSection {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(ARIALevel, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(ARIALevel)
    }

    /**
     * @returns {RoleLIst|*}
     */
    get list() {
        return this.closest(Role.List)
    }

    /**
     * @param {number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttr(ARIAPosInSet, posInSet)
    }

    /**
     * @returns {number}
     */
    get posInSet() {
        return this.getAttr(ARIAPosInSet)
    }

    /**
     * @param {number} setSize
     */
    set setSize(setSize) {
        this.setAttr(ARIASetSize, setSize)
    }

    /**
     * @returns {number}
     */
    get setSize() {
        return this.getAttr(ARIASetSize)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleListItem as ListItem }

Role.ListItem = RoleListItem
