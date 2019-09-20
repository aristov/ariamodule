import { Role } from './Role'

/**
 * An element whose implicit native role semantics will not be mapped to the accessibility API.
 * @see https://www.w3.org/TR/wai-aria-1.1/#none
 */
export class RoleNone extends Role {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleNone as None }

Role.None = RoleNone
