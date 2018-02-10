import { Div } from 'htmlmodule/lib/index'
import { Composite } from './composite'
import { Tab } from './tab'

export class TabList extends Composite {
    /**
     * @param {{}} [init]
     */
    init(init) {
        this.on('click', this.onClick.bind(this))
        super.init(init)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        const targetTab = this.getRole(event.target)
        if(targetTab instanceof Tab) {
            this.tabs.forEach(tab => {
                tab.selected = String(tab === targetTab)
            })
        }
    }

    /**
     * @returns {Tab[]}
     */
    get tabs() {
        return this.findAll(Tab)
    }

    /**
     * @returns {Function} Div
     */
    static get elementAssembler() {
        return Div
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}
