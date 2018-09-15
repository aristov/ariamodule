// uimodule
import { Button } from './Button'
import { Menu } from './Menu'

export class MenuButton extends Button {
    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        super.onKeyDown(event)
        const key = event.key
        if(key === 'ArrowDown' || key === 'ArrowUp') {
            event.preventDefault()
            const items = this.menu.items
            if(!this.expanded) {
                this.expanded = true
            }
            items[key === 'ArrowDown'? 0 : items.length - 1].focus()
        }
    }

    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        super.expanded = this.menu.expanded = expanded
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {Menu} controls
     */
    set controls(controls) {
        super.controls = controls
        const menu = this.menu
        if(menu) {
            menu.trigger = this
            this.hasPopup = 'menu'
            this.expanded = false
        }
    }

    /**
     * @returns {Menu}
     */
    get controls() {
        return super.controls
    }

    /**
     * @returns {Menu}
     */
    get menu() {
        return this.controls.filter(instance => instance instanceof Menu)[0] || null
    }
}

/**
 * @param {{}} init
 * @returns {MenuButton}
 */
export function menuButton(init) {
    return new MenuButton(init)
}
