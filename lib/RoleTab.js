import { Role } from './Role'
import { RoleWidget } from './RoleWidget'
import { PosInSet } from './aria/PosInSet'
import { Selected } from './aria/Selected'
import { SetSize } from './aria/SetSize'

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
        this.setAttr(PosInSet, posInSet)
    }

    /**
     * @returns {number|null}
     */
    get posInSet () {
        return this.getAttr(PosInSet)
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        this.setAttr(Selected, selected)
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.getAttr(Selected) || false
    }

    /**
     * @param {number|null} setSize
     */
    set setSize(setSize) {
        this.setAttr(SetSize, setSize)
    }

    /**
     * @returns {number|null}
     */
    get setSize () {
        return this.getAttr(SetSize)
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
