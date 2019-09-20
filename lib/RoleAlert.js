import { ARIAAtomic } from './ARIAAtomic'
import { ARIALive } from './ARIALive'
import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A type of live region with important, and usually time-sensitive, information.
 * @see https://www.w3.org/TR/wai-aria-1.1/#alert
 */
export class RoleAlert extends RoleSection {
    /**
     * @param {string} live
     */
    set live(live) {
        super.live = live
    }

    /**
     * @returns {string}
     */
    get live() {
        return this.hasAttr(ARIALive)? super.live : 'assertive'
    }

    /**
     * @param {boolean} atomic
     */
    set atomic(atomic) {
        super.atomic = atomic
    }

    /**
     * @returns {boolean}
     */
    get atomic() {
        return this.hasAttr(ARIAAtomic)? super.atomic : true
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleAlert as Alert }

Role.Alert = RoleAlert
