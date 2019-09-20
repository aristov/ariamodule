import { Role } from './Role'
import { RoleLandmark } from './RoleLandmark'

/**
 * The main content of a document.
 * @see https://www.w3.org/TR/wai-aria-1.1/#main
 */
export class RoleMain extends RoleLandmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleMain as Main }

Role.Main = RoleMain
