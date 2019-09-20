import { ARIAChecked } from './ARIAChecked'
import { ARIAPosInSet } from './ARIAPosInSet'
import { ARIASelected } from './ARIASelected'
import { ARIASetSize } from './ARIASetSize'
import { Role } from './Role'
import { RoleInput } from './RoleInput'
import { RoleListBox } from './RoleListBox'

/**
 * A selectable item in a select list.
 * @see https://www.w3.org/TR/wai-aria-1.1/#option
 */
export class RoleOption extends RoleInput {
    /**
     * @param {boolean|string|undefined} checked
     */
    set checked(checked) {
        this.setAttr(ARIAChecked, checked)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get checked() {
        return this.getAttr(ARIAChecked)
    }

    /**
     * @returns {RoleListBox|*|null}
     */
    get listBox() {
        return this.closest(RoleListBox)
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

Role.Option = RoleOption
