import { A } from 'htmlmodule'
import { Command } from './command'
import { Expanded } from './aria'

export class Link extends Command {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(Expanded, expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(Expanded)
    }

    /**
     * @param {String} href
     */
    set href(href) {
        this.ownerElement.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.ownerElement.href
    }

    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.ownerElement.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.ownerElement.rel
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
        return A
    }
}

/**
 * @param {*} [init]
 * @returns {Link}
 */
export function link(...init) {
    return new Link(...init)
}
