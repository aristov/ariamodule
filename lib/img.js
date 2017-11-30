import { Div } from 'htmlmodule'
import { Section } from './section'

export class Img extends Section {
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
        return Div
    }
}

export function img(...init) {
    return new Img(...init)
}
