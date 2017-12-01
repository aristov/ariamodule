import { Landmark } from './landmark'

const LOCAL_NAME = 'header'

export class Banner extends Landmark {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} init
 * @returns {Banner}
 */
export function banner(...init) {
    return new Banner(...init)
}
