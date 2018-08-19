import { Section } from './section'
import { Level } from './aria/level'
import { PosInSet } from './aria/posinset'
import { SetSize } from './aria/setsize'

/**
 * @summary A single item in a list or directory.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listitem
 */
export class ListItem extends Section {
    /**
     * @param {number} level
     */
    set level(level) {
        this.setAttribute(Level, level)
    }

    /**
     * @returns {number}
     */
    get level() {
        return this.getAttribute(Level)
    }

    /**
     * @param {number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttribute(PosInSet, posInSet)
    }

    /**
     * @returns {number}
     */
    get posInSet() {
        return this.getAttribute(PosInSet)
    }

    /**
     * @param {number} setSize
     */
    set setSize(setSize) {
        this.setAttribute(SetSize, setSize)
    }

    /**
     * @returns {number}
     */
    get setSize() {
        return this.getAttribute(SetSize)
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {ListItem}
 */
export function listItem(init) {
    return new ListItem(init)
}
