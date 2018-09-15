import { Section } from './Section'

/**
 * @summary Content that represents a mathematical expression.
 * @see https://www.w3.org/TR/wai-aria-1.1/#math
 */
export class Math extends Section {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {{}} init
 * @returns {Math}
 */
export function math(init) {
    return new Math(init)
}