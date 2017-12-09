import { Div } from 'htmlmodule'
import { Command } from './command'
import { Menu } from './menu'

export class MenuItem extends Command {
    /**
     * @param {*} init
     */
    init(init) {
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('keyup', this.onKeyUp.bind(this))
        this.on('mouseenter', this.onMouseEnter.bind(this))
        this.on('click', this.onClick.bind(this))
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * Stub for extension
     */
    activate() {}

    focus() {
        if(this.hidden) {
            if(this.menu) this.menu.focus()
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
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key === 'ArrowUp' || key === 'ArrowDown') {
            event.preventDefault()
            this.onArrowKeyDown(event)
        }
        else if(key === ' ' && !event.repeat) {
            event.preventDefault()
            this.classList.add('active')
        }
        else if(key === 'Enter') {
            this.emit('click')
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        const items = this.menu.items
        const direction = event.key === 'ArrowUp'? -1 : 1
        let index = items.indexOf(this) + direction
        if(index === items.length) index = 0
        if(index < 0) index = items.length - 1
        items[index].focus()
    }

    /**
     * @param { KeyboardEvent } event
     */
    onKeyUp(event) {
        if(event.key === ' ') {
            this.classList.remove('active')
            this.emit('click')
            // if(node.href) window.location.href = node.href
        }
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseEnter(event) {
        this.focus()
    }

    set hidden(hidden) {
        super.hidden = hidden
    }

    get hidden() {
        const menu = this.menu
        return Boolean(menu) && menu.hidden || super.hidden
    }

    /**
     * @returns {Menu|null}
     */
    get menu() {
        return this.closest(Menu)
    }

    /**
     * @param {Function} onclick
     */
    set onclick(onclick) {
        this.ownerElement.node.onclick = onclick
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
 * @returns {MenuItem}
 */
export function menuItem(...init) {
    return new MenuItem(...init)
}
