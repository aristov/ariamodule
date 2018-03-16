import { A } from 'htmlmodule'
import { Command } from './command'
import { Expanded } from './aria'

/**
 * @summary An interactive reference to an internal or external resource that,
 *  when activated, causes the user agent to navigate to that resource.
 * @see https://www.w3.org/TR/wai-aria-1.1/#link
 */
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
