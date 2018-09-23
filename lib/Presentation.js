import { Role } from './Role'
import { Structure } from './Structure'

/**
 * @summary An element whose implicit native role semantics will not be mapped to the accessibility API.
 * @see https://www.w3.org/TR/wai-aria-1.1/#presentation
 */
export class Presentation extends Structure {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

Role.Presentation = Presentation
