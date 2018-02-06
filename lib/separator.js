import { Structure } from './structure'

/**
 * A divider that separates and distinguishes
 * sections of content or groups of menuitems.
 * 
 * https://www.w3.org/TR/wai-aria-1.1/#separator
 */
export class Separator extends Structure {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {...*} [init]
 * @returns {Separator}
 */
export function separator(...init) {
    return new Separator(...init)
}
