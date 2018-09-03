import { Menu } from './menu'
import { Orientation } from './aria/orientation'

/**
 * @summary A presentation of menu that usually remains visible
 *  and is usually presented horizontally.
 * @see https://www.w3.org/TR/wai-aria-1.1/#menubar
 */
export class MenuBar extends Menu {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        const item = this.items[0]
        if(item) {
            item.tabIndex = 0
        }
    }

    /**
     * @param {string} orientation
     */
    set orientation(orientation) {
        super.orientation = orientation
    }

    /**
     * @returns {string}
     */
    get orientation() {
        return this.hasAttr(Orientation)?
            this.getAttr(Orientation) :
            'horizontal'
    }
}

/**
 * @param {*} [init]
 * @returns {MenuBar}
 */
export function menubar(init) {
    return new MenuBar(init)
}
