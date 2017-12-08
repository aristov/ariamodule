import { Div } from 'htmlmodule'
import { SectionHead } from './sectionhead'
import { Level } from './aria'

export class Heading extends SectionHead {
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
 * @param {*} init
 * @returns {Heading}
 */
export function heading(...init) {
    return new Heading(...init)
}
