import { A } from 'htmlmodule/lib/a'
import { Command } from './command'
import { Expanded } from './aria/expanded'

/**
 * @summary An interactive reference to an internal or external resource that,
 *  when activated, causes the user agent to navigate to that resource.
 * @see https://www.w3.org/TR/wai-aria-1.1/#link
 */
export class Link extends Command {
    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(Expanded, expanded)
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @param {string} href
     */
    set href(href) {
        this.ownerElement.href = href
    }

    /**
     * @returns {string}
     */
    get href() {
        return this.ownerElement.href
    }

    /**
     * @param {string} rel
     */
    set rel(rel) {
        this.ownerElement.rel = rel
    }

    /**
     * @returns {string}
     */
    get rel() {
        return this.ownerElement.rel
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return A
    }
}

/**
 * @param {*} [init]
 * @returns {Link}
 */
export function link(init) {
    return new Link(init)
}
