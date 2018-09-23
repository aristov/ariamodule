import { Div } from 'htmlmodule/lib/Div'
import { Expanded } from './aria/Expanded'
import { Command } from './Command'
import { Menu } from './Menu'
import { Role } from './Role'

let undefined

/**
 * @summary An option in a set of choices contained by a menu or menubar.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menuitem
 */
export class MenuItem extends Command {
    /**
     * @param {{}} init
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

    collapse() {
        let parentMenu = this.parentMenu
        do if(parentMenu.expanded) {
            const trigger = parentMenu.trigger
            trigger.ownerElement.focus()
            trigger.expanded = false
        }
        while(parentMenu = parentMenu.parentMenu)
    }

    /**
     * Focus the menu item or it's owner menu
     */
    focus() {
        const parentMenu = this.parentMenu
        if(parentMenu.hidden) {
            parentMenu.focus()
        }
        else if(!this.contains(document.activeElement)) {
            if(this.expanded !== undefined) {
                if(parentMenu.expanded || parentMenu.items.some(({ expanded }) => expanded)) {
                    this.expanded = true
                }
            }
            super.focus()
        }
    }

    /**
     * @param {FocusEvent} event
     */
    onDocumentFocusIn(event) {
        const target = event.target
        if(this.expanded !== undefined) {
            if(!this.contains(target)) {
                const nestedMenu = this.nestedMenu
                if(nestedMenu && nestedMenu.contains(target)) {
                    this.tabIndex = -1
                }
                else if(this.expanded) {
                    const parentMenu = this.parentMenu
                    if(parentMenu.expanded === undefined && !parentMenu.contains(target)) {
                        this.tabIndex = 0
                    }
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
        const parentMenu = this.parentMenu
        if(parentMenu.expanded === undefined) {
            parentMenu.items.forEach(item => {
                if(!item.disabled) {
                    item.tabIndex = item === this? 0 : -1
                }
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
        const { parentMenu, nestedMenu } = this
        if(parentMenu.orientation === 'vertical') {
            const items = parentMenu.items.filter(({ disabled }) => !disabled)
            const index = items.indexOf(this) - 1
            items[index < 0? items.length - 1 : index].focus()
        }
        else if(nestedMenu) {
            const items = nestedMenu.items.filter(({ disabled }) => !disabled)
            this.expanded = true
            items[items.length - 1].focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        const { parentMenu, nestedMenu } = this
        if(parentMenu.orientation === 'vertical') {
            const items = parentMenu.items.filter(({ disabled }) => !disabled)
            const index = items.indexOf(this) + 1
            items[index === items.length? 0 : index].focus()
        }
        else if(nestedMenu) {
            const items = nestedMenu.items.filter(({ disabled }) => !disabled)
            this.expanded = true
            items[0].focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowLeftKeyDown(event) {
        const parentMenu = this.parentMenu
        if(parentMenu.orientation === 'horizontal') {
            const items = parentMenu.items.filter(({ disabled }) => !disabled)
            const index = items.indexOf(this) - 1
            items[index < 0? items.length - 1 : index].focus()
        }
        else if(parentMenu.expanded !== undefined) {
            const ancestorMenu = parentMenu.parentMenu
            const item = ancestorMenu.find(MenuItem, ({ expanded }) => expanded)
            if(ancestorMenu.orientation === 'horizontal') {
                const items = ancestorMenu.items.filter(({ disabled }) => !disabled)
                const index = items.indexOf(item) - 1
                items[index < 0? items.length - 1 : index].focus()
            }
            else {
                item.focus()
                parentMenu.trigger.expanded = false
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowRightKeyDown(event) {
        const { parentMenu, nestedMenu } = this
        if(parentMenu.orientation === 'horizontal') {
            const items = this.parentMenu.items.filter(({ disabled }) => !disabled)
            const index = items.indexOf(this) + 1
            items[index === items.length? 0 : index].focus()
        }
        else if(nestedMenu) {
            const items = nestedMenu.items.filter(({ disabled }) => !disabled)
            this.expanded = true
            items[0].focus()
        }
        else if(parentMenu.expanded !== undefined) {
            const menuBar = this.closest(Role.MenuBar) // fixme (dommodule)
            if(menuBar && menuBar.orientation === 'horizontal') {
                const items = menuBar.items.filter(({ disabled }) => !disabled)
                const item = menuBar.find(MenuItem, ({ expanded }) => expanded)
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
        if(!this.disabled) {
            const parentMenu = this.parentMenu
            const expanded = parentMenu.expanded
            if(expanded || parentMenu.contains(document.activeElement)) {
                this.focus()
            }
        }
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        super.controls = controls
        const nestedMenu = this.nestedMenu
        if(nestedMenu) {
            nestedMenu.trigger = this
            this.hasPopup = 'menu'
            this.expanded = false
        }
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
        if(expanded !== this.expanded) {
            const nestedMenu = this.nestedMenu
            if(expanded) {
                this.ownerDocument.on('focusin', this.onDocumentFocusIn, this)
            }
            else this.ownerDocument.un('focusin', this.onDocumentFocusIn, this)
            if(nestedMenu) {
                nestedMenu.expanded = expanded
            }
            this.setAttr(Expanded, expanded)
        }
    }

    /**
     * @returns {boolean|undefined}
     */
    get expanded() {
        return this.getAttr(Expanded)
    }

    /**
     * @returns {MenuBar|Menu|null}
     */
    get parentMenu() {
        return this.closest(Menu)
    }

    /**
     * @returns {Menu|null}
     */
    get nestedMenu() {
        return this.controls.filter(instance => instance instanceof Menu)[0] || null
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

Role.MenuItem = MenuItem
