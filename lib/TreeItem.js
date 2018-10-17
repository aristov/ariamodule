import { ElementAssembler } from 'dommodule/lib/ElementAssembler'
import { Role } from './Role'
import { Button } from './Button'
import { Group } from './Group'
import { ListItem } from './ListItem'
import { Tree } from './Tree'
import { Checked } from './aria/Checked'
import { Selected } from './aria/Selected'

let undefined

/**
 * @summary An option item of a tree. This is an element within a tree that may be expanded
 *  or collapsed if it contains a sub-level group of tree item elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#treeitem
 */
export class TreeItem extends ListItem {
    /**
     * @param {{}} init
     */
    create(init) {
        super.create(init)
        this.tabIndex = -1
        this.selected = false
    }

    /**
     * @param {{}} init
     */
    init(init) {
        this.on('focus', this.onFocus)
        this.on('keydown', this.onKeyDown)
        this.on('dblclick', this.onDoubleClick)
        super.init(init)
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
        this.selected = true
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        const { key, target } = event
        if(this.getRoleOf(target) === this) {
            if(key === 'Enter') {
                this.onEnterKeyDown(event)
            }
            if(key === ' ') {
                this.onSpaceKeyDown(event)
            }
            if(key.startsWith('Arrow')) {
                this.onArrowKeyDown(event)
            }
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
        const items = this.tree.items.filter(({ hidden }) => !hidden)
        const index = items.indexOf(this)
        if(index) {
            items[index - 1].focus()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowRightKeyDown(event) {
        if(this.expanded === false) {
            this.expanded = true
        }
        else {
            const item = this.items[0]
            if(item) {
                item.focus()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowDownKeyDown(event) {
        if(this.expanded === true) {
            this.items[0].focus()
        }
        else {
            const items = this.tree.items.filter(({ hidden }) => !hidden)
            const index = items.indexOf(this)
            const item = items[index + 1]
            if(item) {
                item.focus()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onArrowLeftKeyDown(event) {
        if(this.expanded === true) {
            this.expanded = false
        }
        else {
            const item = this.parentItem
            if(item) {
                item.focus()
            }
        }
    }

    /**
     * Toggle the expanded state of tree item
     */
    toggle() {
        if(this.expanded !== undefined) {
            this.expanded = !this.expanded
        }
    }

    /**
     * @param {boolean|string|undefined} checked
     */
    set checked(checked) {
        this.setAttr(Checked, checked)
    }

    /**
     * @returns {boolean|string|undefined}
     */
    get checked() {
        return this.getAttr(Checked)
    }

    /**
     * @param {*} group {Group}
     */
    set group(group) {
        this.prepend(new Button({
            onclick : () => this.toggle(),
            tabIndex : null
        }))
        group.parentNode = this
    }

    /**
     * @returns {Group|null}
     */
    get group() {
        return this.find(Group)
    }

    /**
     * @param {boolean} hidden
     */
    set hidden(hidden) {
        super.hidden = hidden
    }

    /**
     * @returns {boolean}
     */
    get hidden() {
        let item = this
        if(super.hidden) {
            return true
        }
        while(item = item.parentItem) {
            if(item.expanded === false) {
                return true
            }
        }
        return false
    }

    /**
     * @returns {TreeItem[]}
     */
    get items() {
        return this.findAll(TreeItem)
    }

    /**
     * @param {*} label {string|ElementAssembler|*}
     */
    set label(label) {
        if(label instanceof ElementAssembler) {
            this.prepend(this.labelledBy = label)
        }
        else super.label = label
    }

    /**
     * @returns {string}
     */
    get label() {
        return super.label
    }

    /**
     * @returns {TreeItem|null}
     */
    get parentItem() {
        const item = this.parentNode.closest(TreeItem)
        return this.tree.contains(item)?
            item :
            null
    }

    /**
     * @param {boolean} selected
     */
    set selected(selected) {
        this.setAttr(Selected, selected)
    }

    /**
     * @returns {boolean}
     */
    get selected() {
        return this.getAttr(Selected)
    }

    /**
     * @returns {Tree|null}
     */
    get tree() {
        return this.closest(Tree)
    }
}

Role.TreeItem = TreeItem
