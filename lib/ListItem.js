import { Section } from './Section'
import { Level } from './aria/Level'
import { PosInSet } from './aria/PosInSet'
import { SetSize } from './aria/SetSize'

/**
 * @summary A single item in a list or directory.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listitem
 */
export class ListItem extends Section {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttr(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttr(Level)
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
