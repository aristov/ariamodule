import { Div } from 'htmlmodule/lib/div'
import { Expanded } from './aria/expanded'
import { Command } from './command'
import { Menu } from './menu'

let undefined

/**
 * @summary An option in a set of choices contained by a menu or menubar.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitem
 */
export class MenuItem extends Command {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.on('keydown', this.onKeyDown)
        this.on('keyup', this.onKeyUp)
        this.on('mouseenter', this.onMouseEnter)
        this.on('click', this.onClick)
        this.on('focus', this.onFocus)
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * Stub for extension
     */
    activate() {}

    /**
     * Focus the menu item or it's owner menu
     */
    focus() {
        const menu = this.menu
        if(menu.hidden) {
            menu.trigger.focus()
        }
        else super.focus()
    }

    /**
     * @param {Event} event
     */
    onClick(event) {
        if(this.disabled) {
            event.stopImmediatePropagation()
        }
        else {
            event.stopPropagation()
            this.activate()
        }
    }

    /**
     * @param {FocusEvent} kevent
     */
    onFocus(event) {
        const menu = this.menu
        if(menu.expanded === undefined) {
            menu.items.forEach(item => item.tabIndex = item === this? 0 : -1)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) {
            event.preventDefault()
            this.onArrowKeyDown(event)
        }
        else if(key === ' ' && !event.repeat) {
            event.preventDefault()
            this.classList.add('active')
        }
        else if(key === 'Enter') {
            this.click()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const key = event.key
        const menu = this.menu
        const items = menu.items
        let direction
        if(menu.orientation === 'vertical') {
            if(key === 'ArrowUp') {
                direction = -1
            }
            if(key === 'ArrowDown') {
                direction = 1
            }
        }
        else {
            if(key === 'ArrowLeft') {
                direction = -1
            }
            if(key === 'ArrowRight') {
                direction = 1
            }
        }
        if(direction) {
            let index = items.indexOf(this) + direction
            if(index === items.length) {
                index = 0
            }
            if(index < 0) {
                index = items.length - 1
            }
            items[index].focus()
        }
    }

    /**
     * @param { KeyboardEvent } event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.click()
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseEnter(event) {
        if(this.menu.expanded !== undefined) {
            this.focus()
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
     * @returns {Menu|null}
     */
    get menu() {
        return this.closest(Menu)
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
        return Div
    }
}

/**
 * @param {*} [init]
 * @returns {MenuItem}
 */
export function menuItem(init) {
    return new MenuItem(init)
}
