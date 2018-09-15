import { Section} from './Section'

/**
 * @summary A section containing listitem elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#list
 */
export class List extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {List}
 */
export function list(init) {
    return new List(init)
}