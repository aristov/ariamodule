import { Div } from 'htmlmodule'
import { Section } from './section'
import { Level, PosInSet, SetSize } from './aria'

/**
 * @summary A single item in a list or directory.
 * @see https://www.w3.org/TR/wai-aria-1.1/#listitem
 */
export class ListItem extends Section {
    /**
     * @param {Number} level
     */
    set level(level) {
        this.setAttribute(Level, level)
    }

    /**
     * @returns {Number}
     */
    get level() {
        return this.getAttribute(Level)
    }

    /**
     * @param {Number} posInSet
     */
    set posInSet(posInSet) {
        this.setAttribute(PosInSet, posInSet)
    }

    /**
     * @returns {Number}
     */
    get posInSet() {
        return this.getAttribute(PosInSet)
    }

    /**
     * @param {Number} setSize
     */
    set setSize(setSize) {
        this.setAttribute(SetSize, setSize)
    }

    /**
     * @returns {Number}
     */
    get setSize() {
        return this.getAttribute(SetSize)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {ListItem}
 */
export function listItem(...init) {
    return new ListItem(...init)
}
