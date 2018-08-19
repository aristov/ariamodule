// uimodule
import { A } from 'htmlmodule/lib/a'
import { MenuItem } from './menuitem'

export class MenuItemLink extends MenuItem {
    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.key !== 'Enter') {
            super.onKeyDown(event)
        }
    }

    /**
     * @param { KeyboardEvent } event
     */
    onKeyUp(event) {
        super.onKeyUp(event)
        if(event.key === ' ') {
            if(this.href) location = this.href
        }
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
     * @param {string} target
     */
    set target(target) {
        this.ownerElement.target = target
    }

    /**
     * @returns {string}
     */
    get target() {
        return this.ownerElement.target
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
 * @returns {MenuItemLink}
 */
export function menuItemLink(init) {
    return new MenuItemLink(init)
}
