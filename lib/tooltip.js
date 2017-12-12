import { Section } from './section'

/**
 * A contextual popup that displays a description for an element.
 * https://www.w3.org/TR/wai-aria-1.1/#tooltip
 */
export class Tooltip extends Section {
    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {...*} [init]
 * @returns {Tooltip}
 */
export function tooltip(...init) {
    return new Tooltip(...init)
}