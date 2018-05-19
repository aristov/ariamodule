import { Label } from 'htmlmodule/lib/label'
import { Button } from './button'
import { Group } from './group'
import { ListItem } from './listitem'
import { Tree } from './tree'
import { Checked } from './aria/checked'
import { Selected } from './aria/selected'

/**
 * @summary An option item of a tree. This is an element within a tree that may be expanded
 *  or collapsed if it contains a sub-level group of tree item elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#treeitem
 */
export class TreeItem extends ListItem {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.tabIndex = -1
        this.selected = 'false'
        this.on('focus', this.onFocus.bind(this))
        this.on('keydown', this.onKeyDown.bind(this))
        this.on('dblclick', this.onDoubleClick.bind(this))
    }

    /**
     * @param {MouseEvent} event
     */
    onDoubleClick(event) {
        event.stopPropagation()
        this.toggle()
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
        const key = event.key
        if(event.target === this.ownerElement.node) {
            if(key === 'Enter') this.onEnterKeyDown(event)
            if(key === ' ') this.onSpaceKeyDown(event)
            if(key.startsWith('Arrow')) this.onArrowKeyDown(event)
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onEnterKeyDown(event) {
        this.toggle()
    }
    /**
     * @param {KeyboardEvent} event
     */
    onSpaceKeyDown(event) {
        event.preventDefault()
        this.toggle()
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
            else if(parent instanceof TreeItem) {
                parent.focus()
            }
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
     * Toggle the expanded state of tree item
     */
    toggle() {
        if(this.expanded) {
            this.expanded = String(this.expanded === 'false')
        }
    }

    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        if(!this.expanded) {
            const button = new Button({
                onclick : () => this.toggle(),
                tabIndex : NaN,
                className : ''
            })
            this.prepend(button)
        }
        super.expanded = expanded
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return super.expanded
    }

    /**
     * @param {Group|null} group
     */
    set group(group) {
        if(group) this.append(group)
        else {
            const group = this.group
            if(group) group.remove()
        }
    }

    /**
     * @returns {Group|null}
     */
    get group() {
        return this.find(Group)
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        let parent = this
        let hidden = false
        do {
            parent = parent.parent
            if(parent.expanded === 'false') {
                hidden = true
                break
            }
        }
        while(parent instanceof TreeItem)
        return hidden || super.hidden
    }

    /**
     * @returns {TreeItem[]}
     */
    get items() {
        return this.findAll(TreeItem)
    }

    /**
     * @param {String} label
     */
    set label(label) {
        const id = this.id + '-label'
        const instance = new Label({ id, children : label })
        this.ownerElement.prepend(this.labelledBy = instance)
    }

    /**
     * @returns {String}
     */
    get label() {
        const instance = this.labelledBy[0]
        return instance? instance.textContent : ''
    }
    
    /**
     * @returns {TreeItem|null}
     */
    get parent() {
        return this.parentNode.closest(TreeItem) || this.closest(Tree)
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
}

/**
 * @param {*} [init]
 * @returns {TreeItem}
 */
export function treeItem(init) {
    return new TreeItem(init)
}
