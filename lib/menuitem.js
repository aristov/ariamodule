import { Div } from 'htmlmodule/lib/div'
import { Expanded } from './aria/expanded'
import { Command } from './command'
import { Menu } from './menu'

let undefined

/**
 * @summary An option in a set of choices contained by a menu or menubar.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitem
 * todo disabled state handling
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
     * Activate the menu item
     */
    activate() {
        const expanded = this.expanded
        if(expanded !== undefined) {
            this.expanded = !expanded
        }
    }

    /**
     * Focus the menu item or it's owner menu
     */
    focus() {
        const menu = this.menu
        if(menu.hidden) {
            menu.focus()
        }
        else if(!this.contains(document.activeElement)) {
            super.focus()
            if(this.expanded !== undefined) {
                this.expanded = true
            }
        }
    }

    /**
     * @param {Menu|*} menu
     */
    install(menu) {
        const node = this.ownerElement.node
        if(this.menu.orientation === 'horizontal') {
            menu.style.left = node.offsetLeft + 'px'
        }
        else {
            menu.style.left = node.offsetWidth + 'px'
            menu.style.top = node.offsetTop + 'px'
        }
        this.after(menu)
    }

    /**
     * @param {MouseEvent} event
     */
    onDocumentClick(event) {
        if(this.expanded !== undefined) {
            this.expanded = false
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        const target = event.target
        if(this.expanded !== undefined) {
            if(!this.contains(target)) {
                if(this.controls.some(instance => instance.contains(target))) {
                    this.tabIndex = -1
                }
                else if(this.expanded) {
                    if(!this.menu.contains(target)) {
                        this.tabIndex = 0
                    }
                    this.expanded = false
                }
            }
        }
    }

    /**
     * @param {Event} event
     */
    onClick(event) {
        if(this.disabled) {
            event.preventDefault()
            event.stopImmediatePropagation()
        }
        else {
            event.stopPropagation()
            this.activate()
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        const menu = this.menu
        if(menu.expanded === undefined) {
            menu.items.forEach(item => {
                item.tabIndex = item === this? 0 : -1
            })
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const key = event.key
        if(key.startsWith('Arrow')) {
            this.onArrowKeyDown(event)
        }
        else if(key === ' ') {
            this.onSpaceKeyDown(event)
        }
        else if(key === 'Enter') {
            this.onEnterKeyDown(event)
        }
        else if(key === 'Escape') {
            this.onEscapeKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        event.preventDefault()
        switch(event.key) {
            case 'ArrowUp':
                this.onArrowUpKeyDown(event)
                break
            case 'ArrowRight':
                this.onArrowRightKeyDown(event)
                break
            case 'ArrowDown':
                this.onArrowDownKeyDown(event)
                break
            case 'ArrowLeft':
                this.onArrowLeftKeyDown(event)
                break
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowUpKeyDown(event) {
        const menu = this.menu
        if(menu.orientation === 'vertical') {
            const items = menu.items
            const index = items.indexOf(this) - 1
            items[index < 0? items.length - 1 : index].focus()
        }
        else if(this.expanded !== undefined) {
            const items = this.controls[0].items
            this.expanded = true
            items[items.length - 1].focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        const menu = this.menu
        if(menu.orientation === 'vertical') {
            const items = menu.items
            const index = items.indexOf(this) + 1
            items[index === items.length? 0 : index].focus()
        }
        else if(this.expanded !== undefined) {
            this.expanded = true
            this.controls[0].items[0].focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowLeftKeyDown(event) {
        const menu = this.menu
        if(menu.orientation === 'horizontal') {
            const items = menu.items
            const index = items.indexOf(this) - 1
            items[index < 0? items.length - 1 : index].focus()
        }
        else if(menu.expanded !== undefined) {
            const parentMenu = menu.parentMenu
            const item = parentMenu.find(MenuItem, ({ expanded }) => expanded)
            if(parentMenu.orientation === 'horizontal') {
                const items = parentMenu.items
                const index = items.indexOf(item) - 1
                items[index < 0? items.length - 1 : index].focus()
            }
            else {
                item.focus()
                menu.expanded = false
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowRightKeyDown(event) {
        const menu = this.menu
        if(menu.orientation === 'horizontal') {
            const items = menu.items
            const index = items.indexOf(this) + 1
            items[index === items.length? 0 : index].focus()
        }
        else if(this.expanded !== undefined) {
            this.expanded = true
            this.controls[0].items[0].focus()
        }
        else if(menu.expanded !== undefined) {
            const parentMenu = this.getRoleOf(menu.closest('[role~=menubar]')) // fixme (dommodule)
            if(parentMenu) {
                const items = parentMenu.items
                const item = parentMenu.find(MenuItem, ({ expanded }) => expanded)
                const index = items.indexOf(item) + 1
                items[index === items.length? 0 : index].focus()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        event.preventDefault()
        this.classList.add('active')
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        this.activate()
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEscapeKeyDown(event) {
        if(this.expanded) {
            this.expanded = false
        }
        else {
            const menu = this.menu
            if(menu.expanded) {
                const trigger = menu.trigger
                trigger.focus()
                trigger.expanded = false
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
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
        const menu = this.menu
        if(menu.expanded !== undefined || menu.contains(document.activeElement)) {
            this.focus()
        }
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        super.controls = controls
        this.controls.forEach(instance => {
            if(instance instanceof Menu) {
                instance.trigger = this
                this.hasPopup = 'menu'
                this.setAttr(Expanded, false)
                instance.expanded = false
            }
        })
    }

    /**
     * @returns {array}
     */
    get controls() {
        return super.controls
    }

    /**
     * @param {boolean|undefined} expanded
     */
    set expanded(expanded) {
        this.setAttr(Expanded, expanded)
        this.controls.forEach(menu => {
            if(!menu.parentNode) {
                this.install(menu)
            }
            menu.expanded = expanded
        })
        if(expanded) {
            this.ownerDocument.on('focusin', this.onDocumentFocusIn, this)
            this.ownerDocument.on('click', this.onDocumentClick, this)
        }
        else {
            this.ownerDocument.un('focusin', this.onDocumentFocusIn, this)
            this.ownerDocument.un('click', this.onDocumentClick, this)
        }
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
