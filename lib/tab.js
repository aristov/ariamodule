import { Widget } from './widget'
import { Selected } from './aria'

export class Tab extends Widget {
    /**
     * @param {{ selected }} init
     */
    assign(init) {
        this.tabIndex = init.selected === 'true'? 0 : -1
        super.assign(init)
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        this.setAttribute(Selected, selected)
    }

    /**
     * @returns {String}
     */
    get selected() {
        return this.getAttribute(Selected)
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
