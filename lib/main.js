import { Landmark } from './landmark'

const LOCAL_NAME = 'main'

export class Main extends Landmark {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {Main}
 */
export function main(...init) {
    return new Main(...init)
}
