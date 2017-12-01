import { Landmark } from './landmark'

const LOCAL_NAME = 'form'

export class Form extends Landmark {
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
 * @returns {Form}
 */
export function form(...init) {
    return new Form(...init)
}
