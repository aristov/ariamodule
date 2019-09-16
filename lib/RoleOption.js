import { Role } from './Role'
import { RoleInput } from './RoleInput'
import { RoleListBox } from './RoleListBox'
import { Checked } from './aria/Checked'
import { PosInSet } from './aria/PosInSet'
import { Selected } from './aria/Selected'
import { SetSize } from './aria/SetSize'

/**
 * @summary A selectable item in a select list.
 * @see https://www.w3.org/TR/wai-aria-1.1/#option
 *
 * Not to be confused with the native Option constructor of the HTML standard
 * @see https://www.w3.org/TR/html/single-page.html#dom-htmloptionelement-option
 */
export class RoleOption extends RoleInput {
    /**
     * @param {boolean|string|undefined} checked
     */
    set checked(checked) {
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get checked() {
        return this.getAttr(Checked)
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
        this.setAttr(PosInSet, posInSet)
    }

    /**
     * @returns {number}
     */
    get posInSet() {
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
     * @param {number} setSize
     */
    set setSize(setSize) {
        this.setAttr(SetSize, setSize)
    }

    /**
     * @returns {number}
     */
    get setSize() {
        return this.getAttr(SetSize)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleOption as Option, RoleOption as ARIAOption }

Role.Option = RoleOption
