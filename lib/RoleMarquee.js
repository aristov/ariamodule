import { AriaLive } from './AriaLive.js'
import { RoleSection } from './RoleSection.js'

/**
 * A type of live region where non-essential information changes frequently.
 * @see https://www.w3.org/TR/wai-aria-1.1/#marquee
 */
export class RoleMarquee extends RoleSection
{
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
    return this.hasAttr(AriaLive)? super.live : 'off'
  }
}

RoleMarquee.abstract = false
