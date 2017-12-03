import { Span } from 'htmlmodule'
import { Group } from './group'
import { ListItem } from './listitem'
import { Tree } from './tree'
import { Checked, Selected } from './aria'

export class TreeItem extends ListItem {
    /**
     * @param {*} [init]
     */
    init(init) {
        this.tabIndex = -1
        this.on('focus', this.onFocus.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    focus() {
        super.focus()
        this.tree.items.forEach(item => item.tabIndex = -1)
        this.tabIndex = 0
    }

    /**
     * @param {FocusEvent} event
     */
    onFocus(event) {
        this.selected = 'true'
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        if(event.target === this.ownerElement.node) {
            // if(event.key === 'Enter') this.onEnterKeyDown(event)
            if(event.key.startsWith('Arrow')) this.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        if(this.expanded) {
            this.expanded = String(this.expanded === 'false')
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowKeyDown(event) {
        event.preventDefault()
        switch(event.key) {
            case 'ArrowUp': this.onArrowUpKeyDown(event); break
            case 'ArrowRight': this.onArrowRightKeyDown(event); break
            case 'ArrowDown': this.onArrowDownKeyDown(event); break
            case 'ArrowLeft': this.onArrowLeftKeyDown(event); break
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowUpKeyDown(event) {
        const parent = this.parent
        if(parent) {
            const items = parent.items.filter(({ hidden }) => !hidden)
            const index = items.indexOf(this)
            const prevItem = items[index - 1]
            if(prevItem) prevItem.focus()
            else if(parent instanceof TreeItem) parent.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowRightKeyDown(event) {
        if(this.expanded === 'false') this.expanded = 'true'
        else {
            const items = this.items
            if(items.length) items[0].focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        if(this.expanded === 'true') this.items[0].focus()
        else {
            const items = this.tree.items.filter(({ hidden }) => !hidden)
            const index = items.indexOf(this)
            const item = items[index + 1]
            if(item) item.focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowLeftKeyDown(event) {
        if(this.expanded === 'true') this.expanded = 'false'
        else {
            const parent = this.parent
            if(parent instanceof TreeItem) parent.focus()
        }
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        const selector = '[role~=treeitem][aria-expanded=false]'
        return Boolean(this.parentNode.node.closest(selector))
    }

    /**
     * @returns {(TreeItem)[]}
     */
    get items() {
        return this.findAll(TreeItem)
    }

    /**
     * @returns {TreeItem|null}
     */
    get parent() {
        return this.parentNode.closest(TreeItem)
    }

    /**
     * @returns {Tree|null}
     */
    get tree() {
        return this.closest(Tree)
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        if(selected === 'true') {
            this.tree.items.forEach(item => item.selected = 'false')
        }
        this.setAttribute(Selected, selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(Selected)
    }

    /**
     * @param {String} checked
     */
    set checked(checked) {
        this.setAttribute(Checked, checked)
    }

    /**
     * @returns {String}
     */
    get checked() {
        return this.getAttribute(Checked)
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
 * @returns {TreeItem}
 */
export function treeItem(...init) {
    return new TreeItem(...init)
}
