import { RoleType } from './roletype'

export class Widget extends RoleType {
    set tabIndex(tabIndex) {
        this.node.tabIndex = tabIndex
    }
    get tabIndex() {
        const node = this.node
        return node.hasAttribute('tabindex')? node.tabIndex : null
    }
}
