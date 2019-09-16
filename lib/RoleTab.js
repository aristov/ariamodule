import { Role } from './Role'
import { RoleWidget } from './RoleWidget'
import { ARIAPosInSet } from './aria/ARIAPosInSet'
import { ARIASelected } from './aria/ARIASelected'
import { ARIASetSize } from './aria/ARIASetSize'

/**
 * @summary A grouping label providing a mechanism for selecting
 *  the tab content that is to be rendered to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#tab
 */
export class RoleTab extends RoleWidget {
    /**
     * @param {number|null} posInSet
     */
    set posInSet(posInSet) {
        this.setAttr(ARIAPosInSet, posInSet)
    }

    /**
     * @returns {number|null}
     */
    get posInSet () {
        return this.getAttr(ARIAPosInSet)
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        this.setAttr(ARIASelected, selected)
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.getAttr(ARIASelected) || false
    }

    /**
     * @param {number|null} setSize
     */
    set setSize(setSize) {
        this.setAttr(ARIASetSize, setSize)
    }

    /**
     * @returns {number|null}
     */
    get setSize () {
        return this.getAttr(ARIASetSize)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleTab as Tab, RoleTab as ARIATab }

Role.Tab = RoleTab
