import { Header } from 'htmlmodule'
import { Landmark } from './landmark'

export class Banner extends Landmark {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {Function}
     */
    static get elementAssembler() {
        return Header
    }
}

/**
 * @param {*} init
 * @returns {Banner}
 */
export function banner(...init) {
    return new Banner(...init)
}
