import { Span } from 'htmlmodule/lib/Span'
import { Command } from './command'
import { Expanded } from './aria/expanded'

/**
 * @summary An interactive reference to an internal or external resource that,
 *  when activated, causes the user agent to navigate to that resource.
 * @see https://www.w3.org/TR/wai-aria-1.1/#link
 */
export class Link extends Command {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.tabIndex = 0
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('keydown', this.onKeyDown)
        this.on('click', this.onClick)
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key === 'Enter') {
            this.click()
        }
    }

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
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {class}
     */
    static get elementAssembler() {
        return Span
    }
}

/**
 * @param {{}} init
 * @returns {Link}
 */
export function link(init) {
    return new Link(init)
}
