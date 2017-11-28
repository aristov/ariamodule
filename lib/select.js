import { Group } from './group'

export class Select extends Group {

    set orientation(orientation) {
        this.node.setAttribute('aria-orientation', orientation)
    }

    get orientation() {
        return this.node.getAttribute('aria-orientation')
    }

    static get abstract() {
        return true
    }
}
