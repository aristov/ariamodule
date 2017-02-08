import { ListItem } from './listitem'

export class TreeItem extends ListItem {

    init(init) {
        this.tabIndex = -1
        this.node.onfocus = this.onFocus.bind(this)
        this.node.onkeydown = this.onKeyDown.bind(this)
        if(init) super.init(init)
    }

    focus() {
        this.node.focus()
        this.tabIndex = 0
    }

    onFocus(event) {
        this.selected = 'true'
    }

    onKeyDown(event) {
        if(event.target === this.node) {
            // if(event.key === 'Enter') this.onEnterKeyDown(event)
            if(event.key.startsWith('Arrow')) this.onArrowKeyDown(event)
        }
    }

    onEnterKeyDown(event) {
        if(this.expanded) {
            this.expanded = String(this.expanded === 'false')
        }
    }

    onArrowKeyDown(event) {
        event.preventDefault()
        switch(event.key) {
            case 'ArrowUp': this.onArrowUpKeyDown(event); break
            case 'ArrowRight': this.onArrowRightKeyDown(event); break
            case 'ArrowDown': this.onArrowDownKeyDown(event); break
            case 'ArrowLeft': this.onArrowLeftKeyDown(event); break
        }
    }

    onArrowUpKeyDown(event) {
        const parent = this.parent
        const items = parent.items.filter(({ hidden }) => !hidden)
        const index = items.indexOf(this)
        const prevItem = items[index - 1]
        if(prevItem) prevItem.focus()
        else if(parent instanceof TreeItem) parent.focus()
    }

    onArrowRightKeyDown(event) {
        if(this.expanded === 'false') this.expanded = 'true'
        else {
            const items = this.items
            if(items.length) items[0].focus()
        }
    }

    onArrowDownKeyDown(event) {
        if(this.expanded === 'true') this.items[0].focus()
        else {
            const items = this.tree.items.filter(({ hidden }) => !hidden)
            const index = items.indexOf(this)
            const item = items[index + 1]
            if(item) item.focus()
        }
    }

    onArrowLeftKeyDown(event) {
        if(this.expanded === 'true') this.expanded = 'false'
        else {
            const parent = this.parent
            if(parent instanceof TreeItem) parent.focus()
        }
    }

    set tabIndex(tabIndex) {
        if(tabIndex === 0) {
            this.tree.items.forEach(item => item.tabIndex = -1)
        }
        super.tabIndex = tabIndex
    }

    get hidden() {
        const selector = '[role~=treeitem][aria-expanded=false]'
        return Boolean(this.parentNode.closest(selector))
    }

    get items() {
        const selector = '[role~=treeitem]'
        return Array.prototype.map.call(
            this.node.querySelectorAll(selector),
            ({ assembler }) => assembler)
    }

    get parent() {
        const selector = '[role~=treeitem]'
        const node = this.closest(selector)
        return node && node.assembler
    }

    get tree() {
        const selector = '[role~=tree]'
        const node = this.node.closest(selector)
        return node && node.assembler
    }

    set selected(selected) {
        if(selected === 'true') {
            this.tree.items.forEach(item => item.selected = 'false')
        }
        this.node.setAttribute('aria-selected', selected)
    }

    get selected() {
        return this.node.getAttribute('aria-selected')
    }

    set checked(checked) {
        this.node.setAttribute('aria-checked', checked)
    }

    get checked() {
        this.node.getAttribute('aria-checked')
    }

}

export function treeItem(init) {
    return new TreeItem('div', init)
}
