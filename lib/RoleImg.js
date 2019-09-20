import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A container for a collection of elements that form an image.
 * @see https://www.w3.org/TR/wai-aria-1.1/#img
 */
export class RoleImg extends RoleSection {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleImg as Img }

Role.Img = RoleImg
