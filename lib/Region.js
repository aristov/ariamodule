import { Role } from './Role'
import { Landmark } from './Landmark'

/**
 * @summary A perceivable section containing content that is relevant to a specific, author-specified
 *  purpose and sufficiently important that users will likely want to be able to navigate
 *  to the section easily and to have it listed in a summary of the page.
 * @see https://www.w3.org/TR/wai-aria-1.1/#region
 */
export class Region extends Landmark {
    /**
     * @returns {boolean}
     */
    static get abstract() {
        return false
    }
}

export { Region as ARIARegion }

Role.Region = Region
