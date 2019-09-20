import { ARIALive } from './ARIALive'
import { Role } from './Role'
import { RoleSection } from './RoleSection'

/**
 * A type of live region where non-essential information changes frequently.
 * @see https://www.w3.org/TR/wai-aria-1.1/#marquee
 */
export class RoleMarquee extends RoleSection {
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
        return this.hasAttr(ARIALive)? super.live : 'off'
    }

    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { RoleMarquee as Marquee }

Role.Marquee = RoleMarquee
