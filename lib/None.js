import { Role } from './Role'

/**
 * @summary An element whose implicit native role semantics will not be mapped to the accessibility API.
 * @see https://www.w3.org/TR/wai-aria-1.1/#none
 */
export class None extends Role {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}
