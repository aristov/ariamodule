import { Main } from 'htmlmodule'
import { Landmark } from './landmark'

export class Main extends Landmark {
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
        return Main
    }
}

/**
 * @param {*} [init]
 * @returns {Main}
 */
export function main(...init) {
    return new Main(...init)
}
