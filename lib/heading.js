import { SectionHead } from './sectionhead'

const LOCAL_NAME = 'div'

export class Heading extends SectionHead {
    /**
     * @param {Number} level
     */
    set level(level) {
        this.node.setAttribute('aria-level', String(level))
    }

    /**
     * @returns {Number}
     */
    get level() {
        return Number(this.node.getAttribute('aria-level'))
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {Heading}
 */
export function heading(...init) {
    return new Heading(...init)
}
