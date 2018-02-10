import { Widget } from './widget'
import { Selected } from './aria'

export class Tab extends Widget {
    /**
     * @param {{}} [init]
     */
    init(init) {
        this.tabIndex = -1
        super.init(init)
    }

    /**
     * @param {String} selected
     */
    set selected(selected) {
        this.controls.forEach(panel => {
            if(panel) panel.expanded = selected
        })
        this.tabIndex = selected === 'true'? 0 : -1
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
