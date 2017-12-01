import { Button } from './button'

export class MenuButton extends Button {
    /**
     * @param {*} init
     */
    init(init) {
        super.init(init)
        this.hasPopup = 'menu'
        this.node.setAttribute('aria-expanded', 'false')
        this.menu.on('keydown', this.onMenuKeyDown.bind(this))
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onDocumentFocus = this.onDocumentFocus.bind(this)
    }

    /**
     * Activate the menu button
     */
    activate() {
        this.expanded = String(this.expanded === 'false')
    }

    /**
     * @param {HTMLElement} target
     */
    onDocumentClick({ target }) {
        if(!this.node.contains(target) && !this.menu.node.contains(target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {HTMLElement} target
     */
    onDocumentFocus({ target }) {
        if(target !== this.node && !this.menu.node.contains(target)) {
            this.expanded = 'false'
        }
    }

    /**
     * @param {String} key
     */
    onMenuKeyDown({ key }) {
        if(key === 'Escape') {
            this.expanded = 'false'
            this.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        super.onKeyDown(event)
        const key = event.key
        if(key === 'ArrowDown' || key === 'ArrowUp') {
            if(this.expanded === 'false') this.expanded = 'true'
            const items = this.menu.items
            items[key === 'ArrowDown'? 0 : items.length - 1].focus()
            event.preventDefault()
        }
        if(key === 'Escape') this.expanded = 'false'
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        super.expanded = expanded
        this.menu.hidden = expanded === 'false'
        if(expanded === 'true') {
            document.addEventListener('click', this.onDocumentClick)
            document.addEventListener('focus', this.onDocumentFocus, true)
        } else {
            document.removeEventListener('click', this.onDocumentClick)
            document.removeEventListener('focus', this.onDocumentFocus, true)
        }
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {Menu} menu
     */
    set menu(menu) {
        menu.trigger = this
        this._menu = menu
    }

    /**
     * @returns {Menu}
     */
    get menu() {
        return this._menu
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        super.parentNode = parentNode
        this.parentNode.append(this.menu)
    }

    /**
     * @returns {ARIAHTMLElementAssembler}
     */
    get parentNode() {
        return super.parentNode
    }
}

/**
 * @param {*} init
 * @returns {MenuButton}
 */
export function menuButton(...init) {
    return new MenuButton(...init)
}